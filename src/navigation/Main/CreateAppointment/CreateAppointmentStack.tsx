import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAppointmentsStackRoutes} from 'navigation/routes';
import MapSelectSalon from 'screens/main/createAppointment/MapSelectSalon';

const Stack = createNativeStackNavigator();

export const CreateAppointmentsStack = () => (
  <Stack.Navigator
    initialRouteName={CreateAppointmentsStackRoutes.MapSelectSalon}>
    <Stack.Screen
      name={CreateAppointmentsStackRoutes.MapSelectSalon}
      component={MapSelectSalon}
    />
  </Stack.Navigator>
);
