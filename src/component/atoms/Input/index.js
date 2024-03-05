import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Text } from 'react-native'
import { colors } from '../../../utils'


const Input = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.input}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    wrapperInput:{
        marginTop:33
    },
    input : {
        width:310,
        borderBottomColor:colors.grey,
        borderBottomWidth:1,
        paddingBottom:1
    },
    label:{
        fontFamily:'roboto',
        fontSize:14,
        fontWeight:'bold',
        color:'black'
    }
})
