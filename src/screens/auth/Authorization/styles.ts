import {StyleSheet} from 'react-native';

export const flex = {
  flex: 1,
};

const styles = StyleSheet.create({
  mainContainer: {
    ...flex,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authImageStyles: {
    width: '100%',
    height: 400,
    marginTop: 50,
  },
  socialAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  socialAuthButton: {
    marginHorizontal: 4,
    borderRadius: 10,
  },
});

export const getMainContainerStyles = (bgColor: string) => {
  return [
    styles.mainContainer,
    {
      backgroundColor: bgColor,
    },
  ];
};

export const getSocialAuthButton = (bgColor: string, size: number) => {
  return [
    styles.socialAuthButton,
    {
      backgroundColor: bgColor,
      width: size,
      height: size,
    },
  ];
};

export default styles;
