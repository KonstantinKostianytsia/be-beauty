import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {configurePersistable} from 'mobx-persist-store';

import {RootStack} from './src/navigation/rootStack';
import {StoreProvider} from './src/stores/rootStoreContext';
import rootStore from './src/stores';
import {IOS_CLIENT_ID} from './src/constants/ClientIds';
import {ThemeProvider, themeContext} from './src/styles';

const App = () => {
  useEffect(() => {
    configurePersistable(
      {
        stringify: true,
        debugMode: true,
      },
      {delay: 200, fireImmediately: false},
    );
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: IOS_CLIENT_ID,
    });
  }, []);

  return (
    <StoreProvider value={rootStore}>
      <ThemeProvider value={themeContext}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
