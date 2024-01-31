import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './components/Home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';
import AcceuilStackNavigator from './components/Acceuil';
import Selection from './components/Selection';
import { Portfolio } from './components/Portfolio';
import FacStackNavigator from './components/Faq';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Acceuil" component={AcceuilStackNavigator} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: route.name === 'selection' ? '#36454F' : '#FF6666',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
      })}
    >

      <Tab.Screen
        name="acceuil"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        component={AcceuilStackNavigator}
      />
      <Tab.Screen
        name="selection"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="like1" size={size} color={color} />
          ),
        }}
        component={Selection}
      />
    </Tab.Navigator>
  );
};
const DrawerNavigator = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Drawer.Navigator
        screenOptions={{

          headerStyle: {
            backgroundColor: "#FF6666",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",

        }}
      >
        <Drawer.Screen name="Acceuil" component={TabNavigator} />
        <Drawer.Screen name="FAQ" component={FacStackNavigator} />
      </Drawer.Navigator>
    </>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}