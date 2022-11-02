import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StacksScreen from './src/screens/StacksScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StacksScreen />
    </NavigationContainer>
  );
};

export default App;
