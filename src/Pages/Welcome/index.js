import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils';
import { StandardButton } from '../../component';
import { logoVale } from '../../assets';

const Welcome = () => {
  return (
    <View style={styles.wrapper.page}> 
    {/* flex 1 untuk membuat tinggi memenuhi sisa layar hp */}
        <View>
          <Image source={logoVale} style={styles.image.logo}></Image>
        </View>
      <View style={styles.image.svg}>
      
      </View>
      <Text style={styles.text.welcome}>Welcome in LV Reservation</Text>
      <View
        style={styles.wrapper.line}
      />
      <StandardButton text="Login" marginTop={74}/>
      <StandardButton text="Register" marginTop={18}/>
    </View>
  )
}


const styles = {
  wrapper : {
    page: {
      flex:1
    },
    line : {
      width: 252,
      height: 0.8,
      backgroundColor: colors.grey,
      alignSelf: 'center', // Align the line to the center horizontally
      marginVertical: 10, // Adjust the vertical margin as needed
    }
  },
  image: {
    logo : {
      height:60,
      width:112,
      marginTop:20,
      marginLeft: 20
    },
    svg : {
      height:228,
      width:262,
      backgroundColor:colors.standard,
      marginHorizontal:70,
      marginTop:77
    }
  },
  text : {
    welcome : {
      fontFamily:'roboto',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:34,
        color:colors.standard
    }
  }
  
}

export default Welcome
