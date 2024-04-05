import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { Input, StandardButton } from '../../component'
import { LeftArrowSvg, LoginSvg } from '../../assets'
import { colors } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux'
import { ButtonIcon } from '../../component/buttons'
import { loadUser, login } from '../../Services/AuthServices'

const Login = ({navigation}) => {
  // const registerReducer = useSelector(state => state.registerReducer) // disini dia tau kalu reducer mana yang dipake untuk update state. sepaket karena diatas importnya di object yang sama
  // code diatas restrukturisasi jadi seperti dibawah
  const {form, text} = useSelector(state => state.loginReducer)
  const [errorMessage, setErrorMessage] = useState();
  // karena registerReducer itu object yang isinya form text dan name maka kita bisa pakai cara diatas
  // kita panggil form dari object registerreducer sehingga bisa lansung dipake. nda usah registerReducer.form
  // sama dengan text dan name
  const dispatch = useDispatch(); // digunakan untuk melakukan update state global di reducer js

  const navigateWelcome = () =>{
    navigation.navigate('Welcome')
  }

  // const handleLogin = () => {
  //   const body = {
  //     email : form.badgeNumber,
  //     password: form.password,
  //     device_name: `${Platform.OS} ${Platform.Version}`,
  //   }

  //   console.log(body);
  //   axios.post('http://127.0.0.1:8001/login', body).then(res => {
  //     console.log('success');
  //     // getData();
  //   }).catch(err => console.log(err.response.data.errors));
  // }

  async function handleLogin(){
    try {
      await login({
          form,
          device_name: `${Platform.OS} ${Platform.Version}`
        },
      );

      const user = await loadUser();
      console.log(user)
      setErrorMessage("")
    } catch (e) {
      if(e.response?.status === 422){
        setErrorMessage(e.response.data.errors.email)
      } else {
        console.log(e)
      }
    }
  }




  const setFormValue = (value, input) => {
    // disini dia set state dengan cara copy state form yang sudah ada (...form) terus ubah sesuai dengan key yang ada di baris bawah
    // [input] itu dia jadi key atai identifier object mana yang mau diubah. makanya di textInput ada props panggil fungsi dengan parameter kedua itu identifier
      // dispatch(setForm(input, value))
      dispatch(setForm(input, value))
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ButtonIcon onPress={navigateWelcome}/>
      <LoginSvg style={styles.svg} />
      
      <View style={styles.wrapperText}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.form}>
          <Input title="Badge Number" placeholder="type your badge number" value={form.badgeNumber} onChangeText={ e => setFormValue(e, 'badgeNumber')}/>
          {errorMessage && (
            <Text style={styles.errors}>{errorMessage}</Text>
          )}
          <View style={{height:33}}/>
          <Input secureTextEntry={true} title="Password" placeholder="type your password" value={form.password} onChangeText={ e => setFormValue(e, 'password')}/>
        </View>
      </View>
      <StandardButton marginTop={45} text="Login" onPressProps={handleLogin} style={styles.button}/>
    </ScrollView>
    
  )
}

export default Login

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
  },
  errors:{
    color:'red',
    marginTop:5
  }
})
