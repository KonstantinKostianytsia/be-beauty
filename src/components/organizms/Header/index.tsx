import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {CreateAppointmentsStackRoutes} from 'navigation/routes';
import {View} from 'react-native';

import Texts from 'components/atoms/Text';

const HEADER_HEIGHT = 72;

const CustomHeader = (props: NativeStackHeaderProps) => {
  const isHeaderNeeded = () => {
    switch (props.route.name) {
      case CreateAppointmentsStackRoutes.MapSelectSalon:
        return true;
    }
  };

  const renderHeader = () => {
    return (
      <View style={{height: HEADER_HEIGHT}}>
        <Texts.InterBigBold>{props.route.name}</Texts.InterBigBold>
      </View>
    );
  };

  if (isHeaderNeeded()) {
    return renderHeader();
  } else {
    return null;
  }
};

export default CustomHeader;
