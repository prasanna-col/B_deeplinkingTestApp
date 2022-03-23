import React, { useEffect, useCallback } from 'react';

import { Platform, Text, Linking, Button } from 'react-native';

export default function Home({ navigation }) {

  useEffect(() => {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        url ? navigate(url) : Linking.addEventListener('url', handleOpenURL)
      });
    } else {
      // need to off the debugging before run the script in iOS app
      Linking.getInitialURL().then(url => { navigate(url) });
      Linking.addEventListener('url', handleOpenURL);
    }
  }, [])

  const handleOpenURL = (event) => {
    navigate(event.url);
  }

  const navigate = (url) => {
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'people') {
      navigation.navigate('People', { id, name: 'chris' })
    };
  }

  return <>
    <Text>Hello from Home!</Text>
    <Button
      title="Go to People"
      onPress={() => {
        navigation.navigate('People', {
          id: 1,
          name: "herry"
        })
      }}
    />
  </>;
}

