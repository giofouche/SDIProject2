var soul = 14000;
var downPayment = 1000;
var cube= 17000;
var feature1 = "Bluetooth";
var feature2 = "Space";
var feature3 = "Good stero";


console.log ("I am still shopping around for a new car.");
console.log ("I have a few cars on the list");
console.log("I will be looking at the kia soul and the nissan cube")


//Boolean Function
var shopping = function () {
    if ((soul - downPayment) < (cube - downPayment)) {
	console.log("I will look at the soul first");
    }else{
	console.log("I will look at the cube first");
    };
};

shopping();

//Number Function
var financing = function () {
    while (soul < cube) {
    console.log (" Ill see if I can talk the cube's price down");
    cube = cube - 1000
    };
    console.log ("The prices are the same now I can make a better choice.");
};

financing()

