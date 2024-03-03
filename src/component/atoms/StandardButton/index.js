import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


const StandardButton = (props) => {
    return (
      <TouchableOpacity style={{
          width:259,
          height:46,
          backgroundColor:'#01929A',
          borderRadius:15,
          alignSelf:'center',
          marginTop:props.marginTop
        }}>
          <Text style={{
            alignContent:'center',
            textAlign:'center',
            paddingVertical:12,
            fontWeight:'bold',
            fontSize:14,
            fontFamily:'robot',
            color:'#FFFF'
  
          }}>{props.text}</Text>
        </TouchableOpacity>
    )
  }

export default StandardButton
