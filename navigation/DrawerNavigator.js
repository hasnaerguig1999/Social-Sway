import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import Catalogue from '../screens/CatalogueScreen';
import Panier from '../screens/CartScreen';
import Achat from '../screens/PurchasesScreen';
// import Landing from '../screens/LandingScreen';
import Landing from '../screens/LandingScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Landing">
      <Drawer.Screen 
        name="Landing" 
        component={Landing} 
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" color={'black'} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Panier" 
        component={Panier} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart" color={'black'} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Achat" 
        component={Achat} 
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="payment" color={'black'} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}