import React from "react";

import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icon, withBadge } from 'react-native-elements'
import {colors,parameters} from '../global/styles';

import {filterData,BoutiqueData } from '../global/Data';

export default function Store( {
        onPressClothesCard,
        boutiqueName,
        discountPercent,
        deliveryTime,
        businessAdress,
        farAway,
        images,
        srceenwidth}
){
    return (

        <TouchableOpacity>
            <View style={{...styles.cardView,width:srceenwidth}} >
                <Image
                    style={{...styles.image,width:srceenwidth}}
                    source ={images}
                />

                <View>
                <Text style={styles.boutiqueName} >{boutiqueName}</Text>
            </View>
            <View styles={{flex:1, flexDirection:"row"}} >

                <View style={styles.distance} >
                        <Icon
                                name='place'
                                type='material'
                                color={colors.grey2}
                                size={18}
                                iconStyle={{marginTop:3}}
                        
                        />
                        <Text  style={styles.Min}  >{farAway} Km </Text>
  
                        <View  style={{flex:9 , flexDirection:"row"}}  >
                    <Text  style={styles.address} > {businessAdress} </Text>

                </View>
                </View> 
                
            </View>

            </View>
           
         
        </TouchableOpacity>

    )
}

const styles=StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    boutiqueName:{

        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
        marginTop:5,
        marginLeft:10
    },
    distance:{
        flex:4,
        flexDirection:'row',
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },

    Min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10,

    },
    review:{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:"rgba(52,52,52,0.3)",
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopEndRadius:5,
        borderBottomLeftRadius:12
    }
})
