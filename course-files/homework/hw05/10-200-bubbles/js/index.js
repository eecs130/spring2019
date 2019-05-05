paper.install(window);
paper.setup('myCanvas');
var screenW = view.size.width;
var screenH = view.size.height;
var random = function(min, max) {
    var num = parseInt(Math.random() * (max - min) + min);
    return num;
};
var randomDecimal = function(min, max) {
    var num = Math.random() * (max - min) + min;
    return num;
};

var makeBubble = function(fillColor) {
    var bubble = new Path.Circle({
        center: new Point(random(0, screenW), random(0, screenH)),
        radius: random(5, 40),
        strokeColor: '#FFF',
        fillColor: fillColor
    });
    return {
        item: bubble,
        speed: randomDecimal(0.5, 4)
    };
};

var moveBubble = function(bubble) {
    bubble.item.position.y -= bubble.speed;
    if (bubble.item.position.y < -100) {
        bubble.item.position.y = screenH + 100;
    }
};

var counter = 0;
var colors = [
    '#41E3D4',
    '#34CBB8',
    '#1EB197',
    '#048E98',
    '#046899'
];

var bubbles = [];

/* PART 1: Make a "for loop" to   
   manufacture 200 bubbles
   (instead of just 3)
*/
for (var i = 0; i < 100; i++) {
    var bubble = makeBubble(colors[random(0, 5)]);
    bubbles.push(bubble);
}

view.onFrame = function(event) {
    /* PART 2: Make a "for loop" 
       to move all 200 bubbles
       instead of just the first 3
       
    */
    for (var i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
    }
    // end block
};