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
  }
}

export default StartScene;
