import React, {useEffect} from 'react';
import {Platform, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Observer} from 'mobx-react';

import {useAuthStore} from 'helpers/hooks/useStore';
import styles, {getMainContainerStyles, getSocialAuthButton} from './styles';
import {useTheme} from 'helpers/hooks/useTheme';
import CustomImage from 'components/atoms/CustomImage';
import ButtonWithIcon from 'components/moleculs/ButtonWithIcon';
import Texts from 'components/atoms/Text';
import localization from 'localization/index';
import {AuthVariant} from 'models/stores/auth/AuthStoreModels';
import {RootStackRoutes} from 'navigation/routes';

const SOCIAL_BUTTON_SIZE = 40;

const AuthorizationScreen = props => {
  const authStore = useAuthStore();
  const theme = useTheme();

  const renderAuthImage = () => {
    return (
      <CustomImage
        source={theme.images.authImage}
        resizeMode="stretch"
        style={styles.authImageStyles}
      />
    );
  };

  const renderTexts = () => {
    return (
      <View>
        <Texts.InterBigBold>{localization.login}</Texts.InterBigBold>
        <Texts.InterSmallLight>
          {localization.loginInviteText}
        </Texts.InterSmallLight>
      </View>
    );
  };

  const authorize = (authVariant: AuthVariant, userInfo: any) => {
    let email = '',
      firstName = '',
      lastName = '';

    switch (authVariant) {
      case AuthVariant.GOOGLE:
        email = userInfo.user.email;
        lastName = userInfo.user.familyName;
        firstName = userInfo.user.givenName;
        break;
    }

    const onAuthSuccess = () => {
      props.navigation.navigate(RootStackRoutes.Main);
    };

    authStore
      .authorize({
        authVariant,
        email,
      })
      .then(() => {
        onAuthSuccess();
      })
      .catch(err => {
        if (err.status === 404) {
          authStore
            .createAccount({
              authVariant,
              email,
              firstName,
              lastName,
            })
            .then(() => {
              authStore
                .authorize({
                  authVariant,
                  email,
                })
                .then(() => {
                  onAuthSuccess();
                });
            });
        }
      });
  };

  const renderGoogleButton = () => {
    const onPressSignWithGoogle = () => {
      GoogleSignin.hasPlayServices()
        .then(hasPlayService => {
          if (hasPlayService) {
            GoogleSignin.signIn()
              .then(userInfo => {
                authorize(AuthVariant.GOOGLE, userInfo);
              })
              .catch(e => {
                console.log('ERROR IS: ' + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          console.log('ERROR IS: ' + JSON.stringify(e));
        });
    };

    return (
      <ButtonWithIcon
        style={getSocialAuthButton(theme.colors.white, SOCIAL_BUTTON_SIZE)}
        onPress={onPressSignWithGoogle}
        image={theme.images.googleIcon}
        width={SOCIAL_BUTTON_SIZE}
        height={SOCIAL_BUTTON_SIZE}
      />
    );
  };

  const renderFacebookButton = () => {
    const onPressSignWithFacebook = () => {};

    return (
      <ButtonWithIcon
        style={getSocialAuthButton(theme.colors.white, SOCIAL_BUTTON_SIZE)}
        onPress={onPressSignWithFacebook}
        image={theme.images.facebookIcon}
        width={SOCIAL_BUTTON_SIZE}
        height={SOCIAL_BUTTON_SIZE}
      />
    );
  };

  const renderAppleButton = () => {
    const onPressSignWithApple = () => {};

    return (
      <ButtonWithIcon
        style={getSocialAuthButton(theme.colors.white, SOCIAL_BUTTON_SIZE)}
        onPress={onPressSignWithApple}
        image={theme.images.appleIcon}
        width={SOCIAL_BUTTON_SIZE}
        height={SOCIAL_BUTTON_SIZE}
      />
    );
  };

  const renderSocialAuthButtons = () => {
    return (
      <View style={styles.socialAuthContainer}>
        {renderGoogleButton()}
        {renderFacebookButton()}
        {Platform.OS === 'ios' && renderAppleButton()}
      </View>
    );
  };

  return (
    <Observer>
      {() => (
        <View style={getMainContainerStyles(theme.colors.pink)}>
          {renderAuthImage()}
          {renderTexts()}
          {renderSocialAuthButtons()}
        </View>
      )}
    </Observer>
  );
};

export default AuthorizationScreen;
