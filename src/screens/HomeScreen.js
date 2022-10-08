import React,{useState} from "react";

import {View,Text,StyleSheet,TouchableOpacity,Image,
    ScrollView,FlatList,Pressable, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements'
import HomeHearder from "../components/HomeHearder";
import { colors,parameters } from "../global/styles";
import {filterData,BoutiqueData} from '../global/Data';
import ClothesCard from "../components/ClothesCard";
import Store from "../components/Boutique";
import { NavigationContainer } from '@react-navigation/native';

const SCREEN_WIDTH= Dimensions.get('window').width



const NavigationToBoutiquesMap =props=>{
    props.navigation.navigate('BoutiquesMap');
}

const HomeScreen =props=>{
   
const [delivery,setDelivery]=useState(true);
const [indexCheck,setIndexCheck]= useState("0");
    return (

            <View style={styles.container}>
                <HomeHearder  />
                <ScrollView
                        stickyHeaderIndices ={[0]}
                        showsVerticalScrollIndicator={true}
                   
                   >
            <View style={{backgroundColor:colors.cardbackground,paddingBottom:5}}>
                <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}>
                     <TouchableOpacity
                        onPress={()=>{
                            setDelivery(true)
                        }


                        }
                     >
                         <View  style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey5}} >
                            <Text style={styles.deliveryText}>Delivery</Text>
                         </View>
                     </TouchableOpacity>

                     <TouchableOpacity
                             onPress={()=>{
                                setDelivery(false)
                                NavigationToBoutiquesMap(props) 
                            }
                        }
                     >
                         <View  style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey5:colors.buttons }} >
                            <Text style={styles.deliveryText}>Pick Up</Text>
                         </View>
                     </TouchableOpacity>
                </View>
                </View  >
            <View style={styles.filterView}>
                <View style={styles.adressView}>
                        <View style ={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                            <Icon
                             type ="material-community"
                             name="map-marker"
                             color={colors.grey1}
                             size={26}
                            
                            />
                            <Text style={{marginLeft:5}}>Région de Monastir </Text>
                        </View>

                        <View  style={styles.clockView}>
                            <Icon
                             type ="material-community"
                             name="clock-time-four"
                             color={colors.grey1}
                             size={26}
                            
                            />
                            <Text style={{marginLeft:5}}>Now </Text>
                        </View>
                        </View>
                            <View > 
                            <Icon
                             type ="material-community"
                             name="tune"
                             color={colors.grey1}
                             size={26}
                            
                            />
                            </View>
                        </View>
                        <View style={styles.haderTextView}>
                            <Text style={styles.headerText}>Categories</Text>
                        </View>
                        <View>
                            <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                                data={filterData}
                                keyExtractor={(item)=>item.id}
                                extraData={indexCheck}
                                renderItem={({item,idex})=>( 
                                            <Pressable
                                                onPress={()=>{
                                                        setIndexCheck(item.id)

                                                }}
                                            
                                            >
                                                <View style={indexCheck===item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                                    <Image
                                                        style={{height:73,width:70,borderRadius:20}}
                                                        source={item.image}
                                                    
                                                    />
                                                     <View>
                                                     <Text style={indexCheck ===item.id?{...styles.smallCardTextSelected}:{...styles.smallCardText} }>{item.name}</Text>
                                                </View>
                                                 
                                                </View>
                                               
                                            </Pressable>
                                )}
                            />

                        </View>
                        <View style={styles.haderTextView}>
                            <Text style={styles.headerText}>free shipping now</Text>
                        </View>
            <View >
                <FlatList
                    style={{marginTop:10,marginBottom:10 }}
                    horizontal={true}
                      data={BoutiqueData}
                      keyExtractor={(item,index)=>index.toString()}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item})=>(
                          <View style={{marginRight:10}} >
                                    <ClothesCard
                                        screenwidth={SCREEN_WIDTH*0.8}
                                      images={item.images}
                                      boutiqueName={item.boutiqueName}
                                      farAway={item.farAway}
                                      businessAdress={item.businessAddress}
                                      discountPercent={item.discount}
                                    />

                          </View>

                      )}
                />
            </View>

                        <View style={styles.haderTextView}>
                            <Text style={styles.headerText}>store in your Area </Text>
                        </View>
                        <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
                            {
                                    BoutiqueData.map(item =>(

                                                <View  key={item.id} style={{paddingBottom:20}} >

                                                    <Store
                                                          screenwidth={SCREEN_WIDTH*0.95}
                                                         images={item.images}
                                                         boutiqueName={item.boutiqueName}
                                                            farAway={item.farAway}
                                                            businessAdress={item.businessAddress}

                                    />


                                                </View>

                                    ))




                            }

                        </View>

                </ScrollView>
                { delivery &&
                <View style={styles.floatButton}> 
                    <TouchableOpacity
                     onPress={()=>NavigationToBoutiquesMap(props)   }
                    
                    >
                                <Icon
                                    name="place"
                                    type="material"
                                    size={32}
                                    color={colors.buttons}
                                
                                />
                                <Text style={{color:colors.grey2}}>Map </Text>
                    </TouchableOpacity>
                </View>
                }


            </View>

    )

}

const styles =StyleSheet.create({

    container:{
        flex:1,
        
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:30,
        paddingVertical:5
    },

    deliveryText:{
        marginLeft:5,
        fontSize:16
    }
,
filterView:{
    flexDirection:'row' ,
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal:10,
    marginVertical:10

},
adressView:{
    flexDirection:'row',
    backgroundColor:colors.grey4,
    borderRadius:50,
    paddingHorizontal:5,
    marginTop:5,
    justifyContent:'space-between'

},
clockView:{
    flexDirection:'row' ,
    alignItems:'center',
    marginLeft:20,
    borderRadius:20,
    paddingHorizontal:5,
    backgroundColor:colors.cardbackground,
    marginRight:20

},

headerText :{
    color:colors.grey1,
    fontSize:24,
    fontWeight:'bold',
    paddingLeft:10,

    

},
haderTextView:{
    backgroundColor:colors.grey5,
    paddingVertical:3
},

smallCard:{
    borderRadius:30,
    backgroundColor:colors.grey5,
    justifyContent:'center', 
    alignItems:'center',
    padding: 5,
    width:80,
    margin:10,
    height:100

},

smallCardSelected:{
    borderRadius:30,
    backgroundColor:colors.buttons,
    justifyContent:'center',
    alignItems:'center',
    padding: 5,
    width:80,
    margin:10,
    height:100

},

smallCardTextSelected:{

    fontWeight:'bold',
    color:colors.cardbackground,
},
smallCardText:{

    fontWeight:'bold',
    color:colors.grey2,
},
floatButton:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center'
}


})
export default HomeScreen;