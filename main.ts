import Phaser, { Physics } from "phaser"

import Preloader from "./src/Preloader.ts"
import Game from "./src/game.js"

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 2560,
    height: 1280,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x:0, y:0 }
        }
    },
    scene: [Preloader, Game],
    scale: {
        zoom: 0.6
    }
})