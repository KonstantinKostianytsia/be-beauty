import translations from 'localization';
import React from 'react';
import {Text, View} from 'react-native';

const AuthorizationScreen = () => {
  return (
    <View>
      <Text>Authorization</Text>
      <Text>{translations.login}</Text>
    </View>
  );
};

export default AuthorizationScreen;
