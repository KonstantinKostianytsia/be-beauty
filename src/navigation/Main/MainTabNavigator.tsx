import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabRoutes} from 'navigation/routes';
import {CreateAppointmentsStack} from './CreateAppointment/CreateAppointmentStack';
import {ReflectTabBar} from 'components/organizms/ReflectTabBar';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <ReflectTabBar {...props} />}
      initialRouteName={MainTabRoutes.CreateAppointmentTab}>
      <Tab.Screen
        name={MainTabRoutes.CreateAppointmentTab}
        component={CreateAppointmentsStack}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
