import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';

enableScreens();
const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;
function AppStack() {
  return (
    <Navigator initialRouteName='login'>
        <Screen name='login' component={Login} options={{headerShown: false}}/>
    </Navigator>
  );
}


export default AppStack;