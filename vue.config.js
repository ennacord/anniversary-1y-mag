const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, 'docs'),
  transpileDependencies: [
    'vuetify',
  ],
  lintOnSave: false,
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Ethyria Anniversary';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        description: 'Happy 1-year Anniversary Ethyria!',
        'og:title': 'Ethyria Anniversary',
        'og:type': 'website',
        'og:description': 'Happy 1-year Anniversary Ethyria!',
        // 'og:image': 'https://birthday.ennaalouette.com/ogimage.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Ethyria Anniversary',
        'twitter:description': 'Happy 1-year Anniversary Ethyria!',
        // 'twitter:image': 'https://birthday.ennaalouette.com/ogimage.png',
      };
      return args;
    });
    // Add entry point for the VN game
    config.entry('game').add('./game/index.js');
  },
  pwa: {
    name: 'Ethyria Anniversary',
    themeColor: '#102471',
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
    assetsVersion: '2022_02_27_00_00',
    manifestOptions: {
      name: 'Ethyria Anniversary',
      short_name: 'Ethyria Anniv',
      description: 'Happy 1-year Anniversary Ethyria!',
      display: 'standalone',
      orientation: 'landscape',
      background_color: '#ffffff',
      start_url: './',
    },
  },
});
