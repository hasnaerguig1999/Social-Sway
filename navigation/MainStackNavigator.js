import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Landing from '../components/Landing';

import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}