function checkSupported() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        // Canvas is supported
        this.currentPosition = [50, 50];
        this.gridSize = 10;
    } else {
        // Canvas is not supported
        alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
    }
}

let ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)";

let x = 50;
let y = 50;
let width = 10;
let height = 10;

ctx.fillRect(x, y, width, height);

document.onkeydown = function(e) {
    switch(onkeypress()){
        case 37:
            currentPo
        break;
        case 38:
        break;
        case 39:
        break;
        case 40:
        break;

        default:
        break;
    }
}