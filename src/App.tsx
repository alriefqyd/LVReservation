import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    // di bungkus provider untuk manajement state di seluruh apps
    // store adalah state secara global
    <Provider store={store}> 
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App