import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils';
import { StandardButton } from '../../component';
import { WelcomeSvg, logoVale } from '../../assets';



const Welcome = ({navigation}) => {

  const navigate = (destination) => {
    navigation.navigate(destination);
  } 

  return (
    <View style={styles.wrapper.page}> 
    {/* flex 1 untuk membuat tinggi memenuhi sisa layar hp */}
        <View>
          <Image source={logoVale} style={styles.image.logo}></Image>
        </View>
      <View>
        <WelcomeSvg style={styles.image.svg}></WelcomeSvg>
      </View>
      <Text style={styles.text.welcome}>Welcome in LV Reservation</Text>
      <View
        style={styles.wrapper.line}
      />
      <StandardButton text="Login" marginTop={74} onPressProps={() => navigate('Login')}/>
      <StandardButton text="Register" marginTop={18} onPressProps={() => navigate('Register')}/>
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
      // backgroundColor:colors.standard,
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
