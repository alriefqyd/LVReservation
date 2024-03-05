import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Input, StandardButton } from '../../component'
import { LeftArrowSvg, RegisterSvg } from '../../assets'
import { colors } from '../../utils'

const Register = ({navigation}) => {
  const navigateWelcome = () =>{
    navigation.navigate('Welcome')
  }

  return (
    <View>
      <TouchableOpacity onPress={navigateWelcome}>
        <LeftArrowSvg style={styles.back}/>
      </TouchableOpacity>
      <RegisterSvg style={styles.svg} />
      
      <View style={styles.wrapperText}>
        <Text style={styles.text}>Please fill all the form to register your account</Text>
        <View style={styles.form}>
          <Input title="Full Name" placeholder="type your full name"/>  
          <View style={{height:33}}/>
          <Input title="Badge Number" placeholder="type your badge number"/>
          <View style={{height:33}}/>
          <Input title="Password" placeholder="type your password"/>
        </View>
      </View>
      <StandardButton marginTop={31} text="Register" onPressProps={() => alert('Register')} style={styles.button}/>
    </View>
    
  )
}

export default Register

const styles = StyleSheet.create({
  svg: {
    width:290,
    height:140,
    alignSelf:'center',
    marginTop:44
  },
  back:{
    width:24,
    height:24,
    marginTop:16,
    marginLeft:16
  },
  text : {
    fontFamily:'roboto',
    fontWeight:'bold',
    fontSize:14,
    color:colors.primary,
  },
  wrapperText: {
    marginLeft:37,
    width:250,
    marginTop:20
  },
  form : {
    marginTop : 33,
  },
  button : { 
    alignSelf:'center',
    alignItems:'center'
  }
})
