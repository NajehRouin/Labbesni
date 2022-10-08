import React from "react";
import {View,Text,StyleSheet,StatusBar} from 'react-native';

import {colors} from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";
import SingInScreen from "./src/screens/autheScreens/SinginScreen";
import WelcomeScreen from "./src/screens/autheScreens/WelcomScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRouter } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RootClientTabs from "./src/navigation/ClientTab";
import BoutiquesMapScreen from "./src/screens/BoutiquesMapScreen";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const Stack=createStackNavigator();
export default function App(){
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="Light-content"
        backgroundColor={colors.statusbar}
      />
<NavigationContainer>
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Sing_In" component={SingInScreen}  options={{headerShown: false}}/>
    
    <Stack.Screen name="Home" component={RootClientTabs} options={{headerShown: false}}/>
    <Stack.Screen name="BoutiquesMap" component={BoutiquesMapScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/>
  </Stack.Navigator>
</NavigationContainer>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{flex:1}
})
