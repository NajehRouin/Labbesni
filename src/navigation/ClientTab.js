import React from "react";

import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';

import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";

import { View } from "react-native-animatable";
import SearchSrceen from "../screens/SearchSreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
const ClientTabs =  createBottomTabNavigator();

export default function RootClientTabs(){

    

    return (
        <ClientTabs.Navigator
        screenOptions={
          
            {
              // Default Color is blue you can change it by following props
               activeTintColor: colors.buttons,
              // inactiveTintColor: '#ff6b81',
              // Default Background Color is white you can change it by following props
              // activeBackgroundColor: '#ced6e0',
              // inactiveBackgroundColor: '#ced6e0',

              tabBarActiveTintColor: "#ff8caa",
              tabBarStyle: [
                {
                  display: "flex"
                },
                null
              ]
            }
          }
        >
          <ClientTabs.Screen
            name='Accueil'
            component={HomeScreen}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='home'
                type='material' 
                color={color} 
                size={size} />
              ),
            }}
          />

<ClientTabs.Screen
            name='Search'
            component={SearchSrceen}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='search'
                type='material' 
                color={color} 
                size={size} />
              ),
            }}
          />
       <ClientTabs.Screen
            name='My orders'
            component={MyOrdersScreen}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='view-list'
                type='material' 
                color={color} 
                size={size} />
              ),
            }}
          />
          <ClientTabs.Screen
            name='MyAccount'
            component={MyAccountScreen}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='person'
                type='material' 
                color={color} 
                size={size} />
              ),
            }}
          />
        </ClientTabs.Navigator>
      );

}
