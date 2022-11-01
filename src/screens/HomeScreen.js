import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View className="h-screen w-screen flex items-center justify-center">
        <View>
          <Text>HomeScreen</Text>
          <Button
            title="Go to profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
