import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_CLIENT_ID} from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
});

const signInGoogle = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    let {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    console.log(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
};

const LoginScreen = () => {
  return (
    <View>
      <View className="p-5 w-screen h-screen bg-gray-100 flex items-center justify-center">
        <TouchableOpacity onPress={signInGoogle}>
          <View className="bg-white shadow-sm flex justify-center space-x-2 p-5 rounded-lg">
            <Text>Sign In with Google</Text>
          </View>
        </TouchableOpacity>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInGoogle}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
