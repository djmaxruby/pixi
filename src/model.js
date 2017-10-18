export default class Model {

    createCanvas() {
        app = new PIXI.Application(800, 600);
        document.body.appendChild(app.view);
    }

    drawButton() {
        var object = new PIXI.Graphics();
        object.beginFill(0xFF0000,1);
        object.drawRect(100,100,400,300);
        object.endFill();
        object.buttonMode = true;
        object.interactive = true;
        app.stage.addChild(object);
        object.on('pointerdown', controller.onDown);
        object.on('pointerup', controller.onUp);
        object.on('pointerover', controller.onOver);
        object.on('pointerout', controller.onOut);
    }

}