import Phaser from 'phaser';

class StartScene extends Phaser.Scene {
  async create() {
    const { width, height } = this.sys.game.canvas;

    this.add.text(width / 2, height / 2, 'Under Construction', {
      fontSize: 50,
      color: '#ffffff',
      stroke: '#003366',
      strokeThickness: 5,
    }).setOrigin(0.5, 0.5);

    // Loaded assets usage SAMPLE
    this.add.image(width / 2, height / 2, 'bg-room')
      .setDisplaySize(width, height)
      .setDepth(1);
    this.add.image(width * 0.25, height * 0.7, 'chara-enna')
      .setScale(1.4)
      .setDepth(3);
    this.input.on('pointerdown', () => {
      this.sound.add('bgm-bgm01').setVolume(0.15).setLoop(true).play();
      this.sound.add('sfx-millie').setVolume(0.7).play();
    });
    this.add.particles('particles').setDepth(2).createEmitter({
      frame: ['blue', 'gold', 'orange', 'red', 'violet'],
      x: { min: 0, max: 1280 },
      y: { min: -300, max: -30 },
      scale: 0.4,
      gravityX: -3,
      gravityY: 50,
      frequency: 100,
      lifespan: 7000,
      speed: { min: 3, max: 15 },
    });
  }
}

export default StartScene;
