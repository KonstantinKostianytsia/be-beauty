import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizationStack} from './Authorization/AuthorizationStack';
import MainTabNavigator from './Main/MainTabNavigator';
import {RootStackRoutes} from './routes';

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <Stack.Navigator initialRouteName={RootStackRoutes.Auth}>
    <Stack.Screen name={RootStackRoutes.Auth} component={AuthorizationStack} />
    <Stack.Screen name={RootStackRoutes.Main} component={MainTabNavigator} />
  </Stack.Navigator>
);
