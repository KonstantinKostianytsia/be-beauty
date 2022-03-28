module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          localization: './src/localization',
          models: './src/models',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          stores: './src/stores',
        },
      },
    ],
  ],
};
