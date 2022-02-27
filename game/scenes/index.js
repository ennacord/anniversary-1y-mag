import Phaser from 'phaser';

import StartScene from './start';

// Import all assets
const assetsImports = {};
const r = require.context('../assets/', true);
r.keys().forEach((key) => {
  const [, type, sub, file] = key.split('/');
  if (!assetsImports[type]) assetsImports[type] = {};
  if (!assetsImports[type][sub]) assetsImports[type][sub] = {};
  assetsImports[type][sub][file] = r(key);
  return assetsImports[type][sub][file];
});

class IndexScene extends Phaser.Scene {
  loadingText = null;

  preload() {
    // Google Fonts
    this.googleFonts.preload(this.load);

    // Loading text
    const { width, height } = this.sys.game.canvas;
    this.loadingText = this.add.text(width / 2, height / 2, 'Loading....', {
      fontSize: 20,
      color: '#ffffff',
      stroke: '#003366',
      strokeThickness: 5,
    }).setOrigin(0.5, 0.5);

    // Add scenes
    this.scene.add('start', StartScene);

    // DEBUG: Display All Asset Keys
    const assetKeys = [];

    // Preload IMAGES
    Object.entries(assetsImports.image).forEach(([imageSub, imageFiles]) => {
      Object.entries(imageFiles).forEach(([imageKey, imageUrl]) => {
        const key = `${imageSub}-${imageKey.split('.').slice(0, -1).join('.')}`;
        assetKeys.push({ key, type: 'image', url: imageUrl });
        this.load.image(key, imageUrl);
      });
    });

    // Preload AUDIO
    Object.entries(assetsImports.audio).forEach(([audioSub, audioFiles]) => {
      Object.entries(audioFiles).forEach(([audioKey, audioUrl]) => {
        const key = `${audioSub}-${audioKey.split('.').slice(0, -1).join('.')}`;
        assetKeys.push({ key, type: 'audio', url: audioUrl });
        this.load.audio(key, audioUrl);
      });
    });

    // Preload ATLAS
    const { common } = assetsImports.atlas;
    console.log('common', common);
    this.load.atlas('particles', common['particles.png'], common['particles.json']);
    assetKeys.push({ key: 'particles', type: 'atlas' });

    // DEBUG: Display All Asset Keys
    console.table(assetKeys);
  }

  async create() {
    // Wait for asyncs to finish
    await Promise.all([
      // Configure Google Fonts and let it load specific fonts
      this.googleFonts.configure(),
    ]);

    // Done all preloading
    this.loadingText.destroy();

    // Proceed to next scene
    this.scene.start('start');
  }
}

export default IndexScene;
