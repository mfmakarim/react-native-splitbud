import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const signInGoogle = () => {
  console.log('test');
};

const App = () => {
  return (
    <SafeAreaView>
      <View className="p-5 w-screen h-screen bg-gray-100 flex items-center justify-center">
        <TouchableOpacity onPress={signInGoogle}>
          <View className="bg-white shadow-sm flex justify-center space-x-2 p-5 rounded-lg">
            <Text>Sign In with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
