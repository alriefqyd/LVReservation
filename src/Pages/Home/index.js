import React from 'react'
import { Text } from 'react-native'
import { useDispatch } from 'react-redux';

const Home = ({navigation}) => {
    

const dispatch = useDispatch(); 
  return (
    <Text>Home sweet Home</Text>
  )
}

export default Home
