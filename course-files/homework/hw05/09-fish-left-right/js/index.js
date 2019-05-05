paper.install(window);
paper.setup('myCanvas');
var screenW = view.size.width;
var screenH = view.size.height;
var fishList = [];

var leftFishImages = [
    "http://www.foothills.net/siteadmin/ui/unify/plugins/layer-slider/examples/sliderimages/med-fish-close.png",
    "http://ian.umces.edu/imagelibrary/albums/userpics/10043/normal_ian-symbol-acanthurus-lineatus.png"
];

var rightFishImages = [
    "https://s3.postimg.org/gvrywakeb/balik_3_11.png",
    "http://www.outworldz.com/Sculpts/cgi/files/textures-under-the-sea/textures-under%20the%20sea/fish-tropical%20yellow.png",
    "http://orig08.deviantart.net/392e/f/2010/139/5/1/tropical_fish_7_by_it_s.png",
    "http://i769.photobucket.com/albums/xx333/MrPoolsClosed/Tropical-Fish.png"
];
var random = function(min, max) {
    var num = Math.floor((Math.random() * (max + 1 - min) + min));
    return num;
};
var randomDecimal = function(min, max) {
    var num = (Math.random() * (max - min) + min);
    return num;
};

var makeFish = function(x, y, imageURL, speed, scaleFactor) {
    var raster = new Raster({
        source: imageURL,
        position: [x, y]
    });
    raster.scale(scaleFactor);
    return {
        item: raster, 
        speed: speed
    };
};

var addFish = function(numFish) {
    numFish = Math.round(numFish / 2);
    for (var i = 0; i < numFish; ++i) {
        //make a left moving fish and add it to the array:
        var x = random(0, screenW);
        var y = random(0, screenH);
        var url = leftFishImages[random(0, leftFishImages.length)];
        var fish = makeFish(x, y, url, -1 * randomDecimal(1, 6), randomDecimal(0.1, 0.4));
        fishList.push(fish);
        
        //make a right moving fish and add it to the array:
        x = random(0, screenW);
        y = random(0, screenH);
        url = rightFishImages[random(0, leftFishImages.length)];
        fish = makeFish(x, y, url, randomDecimal(1, 6), randomDecimal(0.1, 0.4));
        fishList.push(fish);
    }
};

var moveFish = function (fish) {
    fish.item.position.x += fish.speed;
    if (fish.item.position.x < -100 ) {
        fish.item.position.x = screenW + 100;
    }
    if (fish.item.position.x > screenW + 100) {
        fish.item.position.x = -100;
    }
};

//call the addFish function and pass 
//in the number of fish you would like to generate
//as an argument
addFish(20);

view.onFrame = function (event) {
    // make a for loop that moves all 20 of the fish
    // in the fishList array
    moveFish(fishList[0]);
    moveFish(fishList[1]);
    moveFish(fishList[2]);
    moveFish(fishList[3]);
    moveFish(fishList[4]);

};