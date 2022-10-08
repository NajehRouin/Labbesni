import * as React from 'react';

import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';

import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){

    return(
       
        <Drawer.Navigator
       
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown: false,
                    
                    title:'Client',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? '#7cc':colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
       

    )

}
