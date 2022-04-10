import React from 'react';
import {TextProps, Text} from 'react-native';

const DEFAULT_FONT_FAMILY = 'Inter';

interface TextTemplateProps extends TextProps {
  weight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  size: number;
  lineHeight: number;
  font?: 'Inter';
}

const TextTemplate = (props: TextTemplateProps) => {
  return (
    <Text
      style={{
        fontWeight: props.weight,
        fontSize: props.size,
        lineHeight: props.lineHeight,
        fontFamily: props.font ? props.font : DEFAULT_FONT_FAMILY,
      }}>
      {props.children}
    </Text>
  );
};

const InterBigBold = (props: TextProps) => {
  return (
    <TextTemplate weight="bold" size={24} lineHeight={29}>
      {props.children}
    </TextTemplate>
  );
};

const InterSmallBold = (props: TextProps) => {
  return (
    <TextTemplate weight="600" size={13} lineHeight={16}>
      {props.children}
    </TextTemplate>
  );
};

const InterSmallLight = (props: TextProps) => {
  return (
    <TextTemplate weight="300" size={13} lineHeight={16}>
      {props.children}
    </TextTemplate>
  );
};

export default {
  InterBigBold,
  InterSmallBold,
  InterSmallLight,
};