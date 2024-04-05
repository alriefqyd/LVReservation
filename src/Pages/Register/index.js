import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { Input, StandardButton } from '../../component'
import { LeftArrowSvg, RegisterSvg } from '../../assets'
import { colors } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux'
import axios from 'axios'

const Register = ({navigation}) => {
  // const registerReducer = useSelector(state => state.registerReducer) // disini dia tau kalu reducer mana yang dipake untuk update state. sepaket karena diatas importnya di object yang sama
  // code diatas restrukturisasi jadi seperti dibawah
  const {form, text, name} = useSelector(state => state.registerReducer)
  // karena registerReducer itu object yang isinya form text dan name maka kita bisa pakai cara diatas
  // kita panggil form dari object registerreducer sehingga bisa lansung dipake. nda usah registerReducer.form
  // sama dengan text dan name
  const dispatch = useDispatch(); // digunakan untuk melakukan update state global di reducer js
  const [errorMessage, setErrorMessage] = useState({email:"", password:""});
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false);

  const navigateWelcome = () =>{
    navigation.navigate('Welcome')
  }

  const navigateHome = () =>{
    navigation.navigate('Home')
  }

  const sendData = () => {
    if (!form.fullName || !form.password) {
      alert("Please enter your name and password");
    } else {
      const data = {
        'email': form.badgeNumber, // Assuming form.email corresponds to email input field
        'name': form.badgeNumber, // Assuming form.badgeNumber corresponds to badge number input field
        'password': form.password,
        'deviceName' : `${Platform.OS} ${Platform.Version}`
      };
    
      axios.post('https://8da0-180-251-145-145.ngrok-free.app/api/register', data)
        .then(response => {
          if(response.data.status){
              setSuccessMessage("Register Successfull")
              setErrorMessage("")
              navigateHome()
          } else {
            setErrorMessage(response.data.messages)
            setSuccessMessage("")

          }
        })
        .catch(error => {
          console.log(error)
        });
    }
  };

  const setFormValue = (value, input) => {
    // disini dia set state dengan cara copy state form yang sudah ada (...form) terus ubah sesuai dengan key yang ada di baris bawah
    // [input] itu dia jadi key atai identifier object mana yang mau diubah. makanya di textInput ada props panggil fungsi dengan parameter kedua itu identifier
      dispatch(setForm(input, value))
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={navigateWelcome}>
        <LeftArrowSvg style={styles.back}/>
      </TouchableOpacity>
      <RegisterSvg style={styles.svg} />
      
      <Text style={styles.text}>{text}</Text>
      {successMessage && (
        <View style={{
            backgroundColor:'green',
            marginTop:20,
            borderRadius:10,
            height:40,
            width:'80%',
            alignSelf:'center',
            alignItems:'center',
            backgroundColor:'#45b29c'
        }}>
          <Text style={styles.success}>{successMessage}</Text>
        </View>
      )}

      <View style={styles.wrapperText}>
        <View style={styles.form}>
          <Input title="Full Name" placeholder="type your full name" value={form.fullName} onChangeText={ e => setFormValue(e, 'fullName')}/>  
          {errorMessage.email && (
              <Text style={styles.error}>{errorMessage.email}</Text>
          )}
          <View style={{height:33}}/>
          <Input title="Badge Number" placeholder="type your badge number" value={form.badgeNumber} onChangeText={ e => setFormValue(e, 'badgeNumber')}/>
          <View style={{height:33}}/>
          <Input secureTextEntry={true} title="Password" placeholder="type your password" value={form.password} onChangeText={ e => setFormValue(e, 'password')}/>
          {errorMessage.password && (
              <Text style={styles.error}>{errorMessage.password}</Text>
          )}
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
    alignSelf:'center',
    marginTop:15,
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
  },
  error : {
    color: 'red',
    fontSize: 12
  },
  success : {
    fontFamily:'roboto',
    fontWeight:'bold',
    alignSelf:'center',
    color:'white',
    fontSize: 13,
    alignContent:'center',
    textAlign:"center",
    paddingVertical:12,
  }
})
