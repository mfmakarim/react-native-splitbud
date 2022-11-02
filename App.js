import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StacksScreen from './src/screens/StacksScreen';
import {MyTheme} from './src/themes/MyTheme';

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StacksScreen />
    </NavigationContainer>
  );
};

export default App;
