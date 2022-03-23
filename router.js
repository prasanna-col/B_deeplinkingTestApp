// import React from 'react';
// import {AppRegistry,Text } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import Home from './home';
// import People from './people';
// const Router = StackNavigator({
//   Home: { screen: Home },
//   People: { screen: People },
// });
// export default Router;




import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home_func';
import People from './people_func';
const Stack = createStackNavigator();
function Router() {

  const linking = {
    prefixes: ['myapp://', 'https://myapp.com'],
    config:{
      screens:{
        Home:{
          path:'home/id'
        },
        People:{
          path:'people/id'
        }
      }
    }
  }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="People" component={People} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;

// import React, {Component} from 'react';
// import { StyleSheet, Text, View} from 'react-native';
// import { createAppContainer, createStackNavigator} from "react-navigation";
// import Home from './home';
// import People from './people';
// const AppNavigator = createStackNavigator({
//   Home: { screen: Home },
//   People: { screen: People, path: 'People/:id', },
// },
// {
//   initialRouteName: "Home"
// }
// );
// const prefix = 'myapp://myapp/';
// const App = createAppContainer(AppNavigator)
// const Router = () => <App uriPrefix={prefix} />;
// export default Router;


// import { NavigationContainer } from '@react-navigation/native';
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Landing">
//         <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }