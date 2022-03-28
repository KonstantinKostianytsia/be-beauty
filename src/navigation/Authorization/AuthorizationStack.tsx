import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorizationScreen from 'screens/auth/Authorization';
import RegistrationScreen from 'screens/auth/Registration';
import {AuthorizationStackRoutes} from 'navigation/routes';

const Stack = createNativeStackNavigator();

export const AuthorizationStack = () => (
  <Stack.Navigator initialRouteName={AuthorizationStackRoutes.Authorization}>
    <Stack.Screen
      name={AuthorizationStackRoutes.Authorization}
      component={AuthorizationScreen}
    />
    <Stack.Screen
      name={AuthorizationStackRoutes.Registration}
      component={RegistrationScreen}
    />
  </Stack.Navigator>
);
