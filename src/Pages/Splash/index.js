import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Splash = ({navigation}) => { // props navigate sudah ada di navigator otomatis. ini kita pake untuk identifikasi navigasinya mau kemana, mungkin ada hubungannya dengan Stack.Scren props name
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Welcome')
      },2000)  
    }, [])

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash
