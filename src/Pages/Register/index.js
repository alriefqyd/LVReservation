import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Input, StandardButton } from '../../component'
import { LeftArrowSvg, RegisterSvg } from '../../assets'
import { colors } from '../../utils'
import { useSelector } from 'react-redux'

const Register = ({navigation}) => {
  const registerReducer = useSelector(state => state.registerReducer)

  const navigateWelcome = () =>{
    navigation.navigate('Welcome')
  }

  const [form, setForm] = useState({
    fullName : '',
    badgeNumber : '',
    password:''
  })

  const sendData = () => {
      console.log(form);
  }

  const setFormValue = (value, input) => {
    // disini dia set state dengan cara copy state form yang sudah ada (...form) terus ubah sesuai dengan key yang ada di baris bawah
    // [input] itu dia jadi key atai identifier object mana yang mau diubah. makanya di textInput ada props panggil fungsi dengan parameter kedua itu identifier
    setForm({ 
      ...form,
      [input] : value,
    })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={navigateWelcome}>
        <LeftArrowSvg style={styles.back}/>
      </TouchableOpacity>
      <RegisterSvg style={styles.svg} />
      
      <View style={styles.wrapperText}>
        <Text style={styles.text}>{registerReducer.text} {registerReducer.name}</Text>
        <View style={styles.form}>
          <Input title="Full Name" placeholder="type your full name" value={form.fullName} onChangeText={ e => setFormValue(e, 'fullName')}/>  
          <View style={{height:33}}/>
          <Input title="Badge Number" placeholder="type your badge number" value={form.badgeNumber} onChangeText={ e => setFormValue(e, 'badgeNumber')}/>
          <View style={{height:33}}/>
          <Input secureTextEntry={true} title="Password" placeholder="type your password" value={form.password} onChangeText={ e => setFormValue(e, 'password')}/>
        </View>
      </View>
      <StandardButton marginTop={31} text="Register" onPressProps={sendData} style={styles.button}/>
    </ScrollView>
    
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
