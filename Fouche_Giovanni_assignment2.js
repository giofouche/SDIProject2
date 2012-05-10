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

//Array Function
var carNames = ["Soul", "Cube"];
	zeroTo60 = ["7", "9"];
var testcar = function (carsLeft){
	 var carName = carNames[carsLeft],
            carTime = zeroTo60[carsLeft];
	
	console.log("They say the zero to 60 time in the " + carName + " is " + carTime + " seconds. Im going to test it.");
	
for (var time = 0; time < carTime; time += 1){
	var  timeLeft = carTime - time;
	console.log (time + " seconds have gone by " + timeLeft + " seconds left.");
}	
console.log("The " + carName + " was right on time.")	
};

var testAllcars = function (){
	for (var carsLeft = 0; carsLeft < carNames.length; carsLeft++){
            testcar(carsLeft);
	}
return;};
testAllcars();


// String Function

var features = function() {
    console.log("I think i'm going to go with the soul. It has", feature1," enough" ,feature2 , "and a",feature3 , "." );
}

features();