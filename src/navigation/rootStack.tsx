import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizationStack} from './Authorization/AuthorizationStack';
import MainTabNavigator from './Main/MainTabNavigator';
import {RootStackRoutes} from './routes';
import {useAuthStore} from 'helpers/hooks/useStore';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const authStore = useAuthStore();

  return (
    <Stack.Navigator
      initialRouteName={
        authStore.isAuthorized ? RootStackRoutes.Main : RootStackRoutes.Auth
      }>
      <Stack.Screen
        name={RootStackRoutes.Auth}
        component={AuthorizationStack}
      />
      <Stack.Screen name={RootStackRoutes.Main} component={MainTabNavigator} />
    </Stack.Navigator>
  );
};
