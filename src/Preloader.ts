import Phaser from "phaser"

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        this.load.image('Outside','assets/CuteRPG_Desert_Outside.png')
        this.load.image('OutsideNoCollide', 'assets/CuteRPG_Desert_Outside_NoCollide.png')
        this.load.image('Inside','assets/CuteRPG_Desert_Inside.png')
        this.load.image('trees','assets/Trees+.png')
        this.load.image('sand','assets/Serene_Village_32x32.png')
        this.load.tilemapTiledJSON('desert','assets/desert.json')

    }

    create()
    {
        this.scene.start('game')
    }
}