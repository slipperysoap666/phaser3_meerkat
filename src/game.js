import Phaser from "phaser"

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    preload()
    {

    }

    create()
    {
        const map = this.make.tilemap({key: 'desert'})
        const Outside = map.addTilesetImage('CuteRPG_Desert_Outside','Outside')
        const OutsideNoCollide = map.addTilesetImage('CuteRPG_Desert_Outside_NoCollide','OutsideNoCollide')
        const Inside = map.addTilesetImage('CuteRPG_Desert_Inside','Inside')
        const Tree = map.addTilesetImage('Trees+','trees')
        const Sand = map.addTilesetImage('Serene_Village_32x32','sand')
        
        map.createLayer("Ground", [ Outside, Inside ], 0, 0)
        const wallsLayer = map.createLayer("\u6805\u680f", Outside, 0, 0)
        map.createLayer("foraging_ground", Inside, 0, 0)
        map.createLayer("foraging_ground2", Inside, 0, 0)
        const foragingWallLayer = map.createLayer("foraging_wall", Outside, 0, 0)
        const foragingWallLayer2 = map.createLayer("foraging_wall2", Outside, 0, 0)
        map.createLayer("foraging_item", [ Outside, Inside], 0, 0)
        const waitingAreaWallLayer =  map.createLayer("waiting area", [ Outside, Inside], 0, 0)
        map.createLayer("background", [Outside, Inside], 0, 0)
        map.createLayer("background_trees", Tree, 0, 0)
        map.createLayer("sand_area", [Inside, Sand], 0, 0)
        map.createLayer("sticks", Outside, 0, 0)
        map.createLayer("sticks_item", Outside, 0, 0)
        const moundLayer = map.createLayer("mound", [ Outside, Inside, OutsideNoCollide], 0, 0)
        const mound2Layer = map.createLayer("mound2", [Outside, OutsideNoCollide], 0, 0)
        map.createLayer("mound_item", [Outside, Inside], 0, 0)

        wallsLayer.setCollisionByProperty({ collides: true })
        foragingWallLayer?.setCollisionByProperty({ collides: true })
        moundLayer?.setCollisionByProperty({ collides: true })
        mound2Layer?.setCollisionByProperty({ collides: true })

        const debugGraphics = this.add.graphics().setAlpha(0.7)
        wallsLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
        foragingWallLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
        moundLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
        mound2Layer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })

    }
}