import React from 'react';
import {View, Text} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {Observer} from 'mobx-react';
import {useAuthStore} from 'helpers/hooks/useStore';

const AuthorizationScreen = () => {
  const authStore = useAuthStore();

  const onPressSignWithGoogle = () => {
    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(JSON.stringify(userInfo));
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };

  return (
    <Observer>
      {() => (
        <View>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Light}
            onPress={onPressSignWithGoogle}
          />
          <Text>{authStore.accessToken}</Text>
        </View>
      )}
    </Observer>
  );
};

export default AuthorizationScreen;
