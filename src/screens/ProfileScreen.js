import {View, Text, Button} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View className="p-5">
      <View className="h-full flex justify-between">
        <View>
          <Text>John Doe</Text>
        </View>
        <View>
          <Button title="Log Out" />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
