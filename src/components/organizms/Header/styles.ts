import {StyleSheet} from 'react-native';

export const HEADER_SHADOW_RADIUS = 5;

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowRadius: HEADER_SHADOW_RADIUS,
    shadowOpacity: 1,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export const getMainContainerStyles = (
  height: number,
  bgColor: string,
  shadowColor: string,
) => {
  return [
    styles.mainContainer,
    {
      height,
      backgroundColor: bgColor,
      paddingBottom: height / 5,
      shadowColor,
    },
  ];
};

export default styles;
