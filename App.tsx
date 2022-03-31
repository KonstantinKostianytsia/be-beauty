import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/rootStack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId:
        '84423765352-d9laqf200kevh40o1as0ufof4plk7lu2.apps.googleusercontent.com',
    });
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
