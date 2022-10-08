import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { NavigationContainer } from '@react-navigation/native';

const NavigationToHome=props=>{
  props.navigation.navigate('Drawer');
}
const SingInScreen =props=> {
    const [passwordSecured,setPasswordSecured]=useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#aaf'
                name='comments'
                type='font-awesome'
                size={50}
              />

            </View>
            <Text style={styles.loginTitleText}>Sing In</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputView}>
            
                <Icon color='#333' name='lock'type='font-awesome' size={20} />
             
              <TextInput
                style={{flex:1,paddingHorizontal:12}}
                secureTextEntry={passwordSecured}
                placeholder={'Password'}
                textContentType='password'
              />
              <TouchableOpacity
                style={{padding:4}}
                onPress={()=>{
                    setPasswordSecured(!passwordSecured);
                }}
              >
                  <Icon name='eye' type='font-awesome-5' size={20}  />

              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}
              
              
              onPress={()=>NavigationToHome(props)                                     
              }
              
              >Sing In</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{alignItems:"center",marginTop:7}}>
              <Text style={styles.forgotPasswordText,{textDecorationLine:"underline"}}>Forgot Password?</Text>
            </TouchableOpacity>
                  <View style={{alignItems:"center",marginTop:7}}>
                    <Text style={{ fontSize:15 ,fontWeight:"bold"}}>OR</Text>
                  </View>
            <View style={{marginTop:3}}>
          <SocialIcon
            title='Sing In with Facebook'
            button type='facebook'
            style={styles.SocialIcon}
            onPress={()=>{}}
          />
        </View>

        <View style={{marginTop:1}}>
          <SocialIcon
            title='Sing In with Google'
            button type='google'
            style={styles.SocialIcon}
            onPress={()=>{}}
          />
        </View>
        <View style={{alignItems:"flex-start",marginTop:7}}>
              <Text style={styles.forgotPasswordText,{fontWeight:"bold"}}>New on Labbasni ?</Text>
            </View>
          <View style={{alignItems:"flex-end",marginHorizontal:20,marginTop:10}}>
                <Button
                  title="Create an account"
                  buttonStyle={styles.createButton}
                  titleStyle={styles.createButtonTitle}
                
                />
          </View>
          </View>
        </View>
       
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  inputView:{
        width:'100%',
        height:44,
        backgroundColor:'#f1f3f6',
        borderRadius:8,
        paddingHorizontal:10,
        display:'flex',
        flexDirection:'row',
        alignContent:'center'


  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '10%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
  
    borderRadius:50
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
   
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },

  SocialIcon:{
    borderRadius:12,
    height:50
  },

  createButton:{
    backgroundColor:"white",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:20,
    borderWidth:1,
    borderColor:'#ff8c52',
    height:48,
    paddingHorizontal:20
     
  },
  createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:3
  } 
});
export default SingInScreen;