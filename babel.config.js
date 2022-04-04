module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          components: './src/components',
          localization: './src/localization',
          models: './src/models',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          stores: './src/stores',
          constants: './src/constants',
          helpers: './src/helpers',
          styles: './src/styles',
          assets: './assets',
        },
      },
    ],
  ],
};
