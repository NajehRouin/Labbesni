import React from "react";

//import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import WelcomeScreen from '../screens/autheScreens/WelcomScreen';
import SingInScreen from '../screens/autheScreens/SinginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,TransitionPresets } from '@react-navigation/native-stack';
const Auth=createNativeStackNavigator();


export default function AuthStack(){
    return (
        <NavigationContainer>
        <Auth.Navigator>
            <Auth.Screen
                name="WelcomeScreen"
                 component = { WelcomeScreen }  
                 /*options={{
                     headerShown:false,
                     ...TransitionPresets.RevealFromBottomAndroid 


                 }}  */
                 options={{ title: 'Welcome' }}    
            />

            <Auth.Screen
                name="Login"
                 component = { SingInScreen }  
                /* options={{
                     headerShown:false,
                     ...TransitionPresets.RevealFromBottomAndroid 


                 }}  */    
                 options={{ title: 'Welcome' }} 
            />

        </Auth.Navigator>
        </NavigationContainer>

    )
}