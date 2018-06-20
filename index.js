function Phone(brand, price, color, premiere) {
    //Here we put interior of the constructing function.
    this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
    this.color = color;
    this.premiere = premiere;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It had its premiere in " + this.premiere + ".");
}
Phone.prototype.createBox = function() {
    var newBox = document.getElementById("boxes");
    newBox.innerHTML += "<div class='box'> The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It had its premiere in " + this.premiere + ".</div>";
}
var SamsungGalaxyS6 = new Phone("Samsung", 1500, "black", 2018);
var iPhone6S = new Phone("Apple", 2250, "silver", 2017);
var OnePlusOne = new Phone("One", 2000, "gold", 2016);

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

SamsungGalaxyS6.createBox();
iPhone6S.createBox();
OnePlusOne.createBox();