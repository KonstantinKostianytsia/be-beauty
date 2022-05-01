import {Animated, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  svgContainerStyles: {
    backgroundColor: 'red',
  },
  tabContainerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconStyles: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: -8,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const getIconCircle = (bgColor: string, size: number) => {
  return [
    styles.circle,
    {
      backgroundColor: bgColor,
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  ];
};

export const getActiveIconStyles = (
  width: number,
  height: number,
  index: number,
  activeValue: Animated.Value,
) => {
  return [
    styles.activeIconStyles,
    {
      width,
      left: width * index,
      height,
      opacity: activeValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateY: activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [height, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
  ];
};

export const getTabContainerStyles = (
  width: number,
  height: number,
  value: Animated.Value,
  index: number,
) => {
  const cursor = width * index;
  const opacity = value.interpolate({
    inputRange: [cursor - width, cursor, cursor + width],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  return [
    styles.tabContainerStyles,
    {
      width: width,
      height: height,
      opacity,
    },
  ];
};

export default styles;
