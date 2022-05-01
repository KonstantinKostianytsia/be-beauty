import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabRoutes} from 'navigation/routes';
import {CreateAppointmentsStack} from './CreateAppointment/CreateAppointmentStack';
import {ReflectTabBar} from 'components/organizms/ReflectTabBar';
import AppointmentsListScreen from 'screens/main/AppointmentList';
import ProfileScreen from 'screens/main/Profile';
import InfoTabScreen from 'screens/main/InfoTab';
import CustomHeader from 'components/organizms/Header';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <ReflectTabBar {...props} />}
      initialRouteName={MainTabRoutes.CreateAppointmentTab}>
      <Tab.Screen
        options={{
          header: props => <CustomHeader {...props} />,
        }}
        name={MainTabRoutes.CreateAppointmentTab}
        component={CreateAppointmentsStack}
      />
      <Tab.Screen
        options={{
          header: props => <CustomHeader {...props} />,
        }}
        name={MainTabRoutes.AppointmentsListTab}
        component={AppointmentsListScreen}
      />
      <Tab.Screen
        options={{
          header: props => <CustomHeader {...props} />,
        }}
        name={MainTabRoutes.ProfileTab}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          header: props => <CustomHeader {...props} />,
        }}
        name={MainTabRoutes.InfoTab}
        component={InfoTabScreen}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
