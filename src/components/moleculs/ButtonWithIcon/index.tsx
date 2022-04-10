import React from 'react';
import CustomTouchableOpacity from 'components/atoms/CustomTouchableOpacity';
import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';
import CustomImage from 'components/atoms/CustomImage';

export interface ButtonWithIcon extends TouchableOpacityProps {
  image: ImageSourcePropType;
  width: number;
  height: number;
}

const ButtonWithIcon = (props: ButtonWithIcon) => {
  return (
    <CustomTouchableOpacity {...props}>
      <CustomImage
        source={props.image}
        style={{width: props.width, height: props.height}}
      />
    </CustomTouchableOpacity>
  );
};

export default ButtonWithIcon;
