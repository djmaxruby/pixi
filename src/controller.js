export default class Controller {

    onDown () {
        this.beginFill(0x0000FF);
        this.drawRect(100,100,400,300);
        this.endFill();
    }
    onUp () {
        this.beginFill(0x00FF00);
        this.drawRect(100,100,400,300);
        this.endFill();
    }
    onOut () {
        this.beginFill(0xFF0000);
        this.drawRect(100,100,400,300);
        this.endFill();
    }
    onOver () {
        this.beginFill(0x00FF00);
        this.drawRect(100,100,400,300);
        this.endFill();
    }
}
