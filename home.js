import React from 'react';

import { Platform, Text, Linking, Button } from 'react-native';
import NativeIntentAndroid from 'react-native/Libraries/Linking/NativeIntentAndroid'
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

    this.subs = [
      this.props.navigation.addListener('didFocus', (payload) => this.componentDidFocus(payload)),
    ];


  }
  componentDidFocus() {
    console.log("home did mount", this.props)

    if (Platform.OS === 'android') {
      console.log("home page call")
      Linking.getInitialURL().then(url => {
        this.navigate(url);

      });

      NativeIntentAndroid.getInitialURL().then(url => console.log(url))

    } else {
      // alert("url-->", url)
      Linking.addEventListener('url', this.handleOpenURL);
    }

  }

 



  handleOpenURL = (event) => {
    // alert( event.url)
    this.navigate(event.url);
  }

  navigate = (url) => {
    console.log("navigate url", url)

    if (!url) {
      console.log("jiii")
      NativeLinking.getInitialURL().then((url) => {
        console.log('Initial url is: ' + url);
      }).catch(err => console.error('An error occurred', err));

      
    }

    console.log("navigate props", this.props)

    const { navigate } = this.props.navigation;

    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'people') {
      navigate('People', { id, name: 'chris' })
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return <>
      <Text>Hello from Home!</Text>
      <Button
        title="Go to People"
        onPress={() => {
          navigate('People', {
            id: 1,
            name: "herry"
          })
        }}
      />
    </>;
  }
}

export default Home;
