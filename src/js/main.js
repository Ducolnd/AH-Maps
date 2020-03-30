function product(name, location, description, bonus, barCode) {
    this.name = name;
    this.location = location; // [pad, meter, rang, ...]
    this.description = description;
    this.bonus = bonus
    this.barCode = barCode
}

var producten = {
    appels: new product("Appels", [3, 2, 7, 2], "Zoetzure appels met een tint van zout. Lekker goudbruin zonder pitten", true, "576567"),
    kaas: new product("Kaas", [4, 4, 7, 2], "Heel lekker", false, "23453463"),
    brood: new product("Brood", [5, 4, 7, 2], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse impedit soluta magni, voluptatem fugiat ipsam a placeat amet facere, veniam consequuntur odit possimus quo ducimus cumque eum laboriosam sint?", false, "243685"),
    chips: new product("Chips", [6, 20, 7, 2], "Super krokant", false, "152745"),
    bonen: new product("Bonen", [7, 4, 7, 2], "Typisch hollands", false, "34647"),
}

function resizeDiv() {
    var amount = (window.innerHeight - (100+450))*0.7;
    document.getElementById("heightItem").style.height = `${amount}px`;
}

var groch = [producten.appels, producten.bonen];

var index = 0
var start = groch[index].name;
var currentClass;

var product = $("#product");
var productName = $("#productName");
var productLocation = $("#productLocation");
var productDescription = $("#productDescription");
var productImage = $("#productImage");

product.html(start);
changeInfo(groch[index]);

function next() {
    if(index == groch.length-1) {
        index = 0;
    } else {index++}

    list = groch[index]

    product.html(groch[index].name)
    var loc = groch[index].location
    currentClass = findClass(loc[0]).getMeterCoord(loc[1])
    mark.x = currentClass[0];
    mark.y = currentClass[1];
    changeInfo(list);

}

function prev() {
    console.log("prev")
    if(index == 0) {
        index = groch.length-1;
    } else {index--}

    list = groch[index]

    product.html(list.name);
    var loc = groch[index].location
    currentClass = findClass(loc[0]).getMeterCoord(loc[1])
    mark.x = currentClass[0];
    mark.y = currentClass[1];
    mark.img.src = "../static/" + list.barCode + ".jpg"
    changeInfo(list);
}

function changeInfo(list) {
    var format = list.location;
    var bonusString = "<h1 id='bonus'>Bonus</h1>";

    productLocation.html(`Pad ${format[0]}  Meter ${format[1]} <br> Plank ${format[2]} Rang ${format[3]}`);
    productName.html(list.name);
    productDescription.html(list.description);
    productImage.attr("src", "../static/" + list.barCode + ".jpg")
    
    if(list.bonus) {
        $("#bonus").html(bonusString);
        $("#bonus").show();
    } else {
        $("#bonus").hide();
    }
}