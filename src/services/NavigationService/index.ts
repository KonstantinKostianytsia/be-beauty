import React from 'react';
import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import {AllRoutes} from 'models/sevices/INavigationService';

export var navigationRef: any = React.createRef();

function setNavigationRef(
  ref: NavigationContainerRef<ReactNavigation.RootParamList>,
) {
  navigationRef = ref;
}

function push(route: AllRoutes, params?: Object) {
  navigationRef.current?.push(route, params);
}

function navigate(route: AllRoutes, params?: Object) {
  navigationRef.current?.navigate(route, params);
}

function replace(route: AllRoutes, params?: Object) {
  navigationRef.current?.dispatch(StackActions.replace(route, params));
}

export default {
  navigationRef,
  push,
  setNavigationRef,
  navigate,
  replace,
};
