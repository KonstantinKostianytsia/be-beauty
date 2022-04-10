import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthorizationScreen from 'screens/auth/Authorization/Authorization';
import {AuthorizationStackRoutes} from 'navigation/routes';
import CustomHeader from 'components/organizms/Header';

const Stack = createNativeStackNavigator();

export const AuthorizationStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: CustomHeader,
    }}
    initialRouteName={AuthorizationStackRoutes.Authorization}>
    <Stack.Screen
      name={AuthorizationStackRoutes.Authorization}
      component={AuthorizationScreen}
    />
  </Stack.Navigator>
);
