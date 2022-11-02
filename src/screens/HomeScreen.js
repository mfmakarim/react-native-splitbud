import {View, Text, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../contexts/ThemeContext';

const HomeScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);

  return (
    <View className="px-5 space-y-3">
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text>Welcome back!</Text>
          <Text className="font-medium text-lg">John Doe</Text>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={24} />
        </View>
      </View>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        colors={theme.gradient}
        className="rounded-lg h-32 p-3">
        <View>
          <Text className="text-white">Budget card</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
