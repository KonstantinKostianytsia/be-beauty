import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {View} from 'react-native';

import Texts from 'components/atoms/Text';
import {getMainContainerStyles, HEADER_SHADOW_RADIUS} from './styles';
import {useTheme} from 'helpers/hooks/useTheme';
import {getHeaderText, isHeaderNeeded} from 'helpers/headerHelpers';

const TOOLS_HEADER_HEIGHT = 30;
const HEADER_HEIGHT = 72 + TOOLS_HEADER_HEIGHT;

const CustomHeader = (props: NativeStackHeaderProps) => {
  const theme = useTheme();

  const renderHeader = () => {
    return (
      <View style={{height: HEADER_HEIGHT + HEADER_SHADOW_RADIUS}}>
        <View
          style={getMainContainerStyles(
            HEADER_HEIGHT,
            theme.colors.headerPink,
            theme.colors.black,
          )}>
          <Texts.InterMediumSemiBold style={{color: theme.colors.white}}>
            {getHeaderText(props.route)}
          </Texts.InterMediumSemiBold>
        </View>
      </View>
    );
  };

  if (isHeaderNeeded(props.route)) {
    return renderHeader();
  } else {
    return null;
  }
};

export default CustomHeader;
