import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeContextProvider} from '../contexts/ThemeContext';

import TabsScreen from './TabsScreen';

const Stack = createNativeStackNavigator();

const StacksScreen = () => {
  return (
    <ThemeContextProvider>
      <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
        <Stack.Screen
          name="Tabs"
          component={TabsScreen}
          options={() => ({title: 'SplitBud', headerShown: false})}
        />
      </Stack.Navigator>
    </ThemeContextProvider>
  );
};

export default StacksScreen;
