import Model from "./model"

let model = new Model();

var view = {
    start: function(){
        model.createCanvas();
        model.drawButton();
    }
};

view.start();
