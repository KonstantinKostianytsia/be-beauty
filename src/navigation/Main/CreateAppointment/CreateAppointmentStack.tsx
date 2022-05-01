import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAppointmentsStackRoutes} from 'navigation/routes';
import MapSelectSalon from 'screens/main/createAppointment/MapSelectSalon';
import CustomHeader from 'components/organizms/Header';

const Stack = createNativeStackNavigator();

export const CreateAppointmentsStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <CustomHeader {...props} />,
    }}
    initialRouteName={CreateAppointmentsStackRoutes.MapSelectSalon}>
    <Stack.Screen
      name={CreateAppointmentsStackRoutes.MapSelectSalon}
      component={MapSelectSalon}
    />
  </Stack.Navigator>
);
