import React from 'react';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';

const CustomTouchableOpacity = (props: TouchableOpacityProps) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

export default CustomTouchableOpacity;
