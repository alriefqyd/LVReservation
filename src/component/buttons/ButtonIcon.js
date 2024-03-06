import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { LeftArrowSvg } from '../../assets'

const ButtonIcon = ({...res}) => {

  return (
    <TouchableOpacity onPress={res.onPress}>
        <LeftArrowSvg style={styles.back}/>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({

    back:{
      width:24,
      height:24,
      marginTop:16,
      marginLeft:16
    },
  })