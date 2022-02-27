import Phaser from 'phaser';
import plugins from './plugins';
import scene from './scenes';

class EthyriaVN {
  constructor(elementId, chapterNum) {
    console.log('chapterNum', chapterNum);
    // Create Phaser game instance
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: elementId,
      banner: false,
      disableContextMenu: false,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
      },
      backgroundColor: Phaser.Display.Color.HexStringToColor('#858ED1').color,
      plugins,
      scene,
    });
  }
}

export default EthyriaVN;
