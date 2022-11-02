import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabsScreen from './TabsScreen';

const Stack = createNativeStackNavigator();

const StacksScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
      <Stack.Screen
        name="Tabs"
        component={TabsScreen}
        options={() => ({title: 'SplitBud'})}
      />
    </Stack.Navigator>
  );
};

export default StacksScreen;
