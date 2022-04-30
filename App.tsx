import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {configurePersistable} from 'mobx-persist-store';
import SplashScreen from 'react-native-splash-screen';
import DropdownAlert from 'react-native-dropdownalert';

import {RootStack} from './src/navigation/rootStack';
import {StoreProvider} from './src/stores/rootStoreContext';
import rootStore from './src/stores';
import {IOS_CLIENT_ID} from './src/constants/ClientIds';
import {ThemeProvider, themeContext} from './src/styles';
import AlertService from './src/services/AlertService';
import NavigationService, {
  navigationRef,
} from './src/services/NavigationService';
import {RootStackRoutes} from './src/navigation/routes';

const App = () => {
  useEffect(() => {
    configurePersistable(
      {
        stringify: true,
        debugMode: true,
      },
      {delay: 200, fireImmediately: false},
    );
    rootStore.authStore.getPersistedStore().then(value => {
      if (value.accessToken && value.accessToken.length > 0) {
        NavigationService.replace(RootStackRoutes.Main);
      }
      setTimeout(() => {
        SplashScreen.hide();
      }, 100);
    });
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: IOS_CLIENT_ID,
    });
  }, []);

  return (
    <StoreProvider value={rootStore}>
      <ThemeProvider value={themeContext}>
        <NavigationContainer ref={navigationRef}>
          <RootStack />
          <DropdownAlert
            ref={ref => {
              if (ref) {
                AlertService.setDropDown(ref);
              }
            }}
          />
        </NavigationContainer>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
