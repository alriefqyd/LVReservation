import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Login, Register, Splash, Welcome } from '../Pages';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Router = () => {
    const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{hederShown:false}}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown:false,
        }}/>
    </Stack.Navigator>
    </SafeAreaProvider>
    
  )
}

export default Router
