import React from "react";

import {View,Text,StyleSheet} from 'react-native';
import {Icon, withBadge } from 'react-native-elements'
import {colors,parameters} from '../global/styles'

import { NavigationContainer ,DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import DrawerNavigator from "../navigation/DrawerNavigator";

const NavigationToDrawer =props=>{
    props.navigation.toggleDrawer()};


const HomeHearder=props=>{

    const BadgeIcon = withBadge(0)(Icon);

    return(
            <View style={styles.header}>
                    <View style ={{alignItems:"center",justifyContent:'center',marginLeft:15}}>
                        <Icon
                        
                        type ="material-community"
                        name ="menu"
                        color = {colors.cardbackground}
                        size={32}
                        onPress={()=>{
                            NavigationToDrawer(props)
                            
                        }}
                       
                     
                        
                        />
                        
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:colors.cardbackground,fontSize:25,fontWeight:"bold"}} >LABBASNI</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',marginRight:15}}>
                        <BadgeIcon
                                 type ="material-community"
                                 name="cart"
                                 size={35}
                                 color={colors.cardbackground}
                        
                        />
                    </View>
            </View>


    )
}


const styles=StyleSheet.create({

        header:{
            flexDirection:'row',
            backgroundColor:colors.buttons,
            height:parameters.headerHeight,
            justifyContent:'space-between'
        }



})
export default HomeHearder;