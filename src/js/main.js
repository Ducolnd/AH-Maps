function product(name, location, description, voorraad) {
    this.name = name;
    this.location = location; // [pad, meter, rang, ...]
    this.description = description;
    this.voorraad = voorraad;
}

var producten = {
    appels: new product("Appels", [3, 2, 7, 2], "Zoetzure appels met een tint van zout. Lekker goudbruin zonder pitten", 32),
    kaas: new product("Kaas", [4, 4, 7, 2], "Heel lekker", 32),
    brood: new product("Brood", [5, 4, 7, 2], "Heel lekker", 32),
    chips: new product("Chips", [6, 4, 7, 2], "Heel lekker", 32),
    bonen: new product("Bonen", [7, 4, 7, 2], "Heel lekker", 32),
}

var groch = [producten.appels, producten.kaas, producten.brood, producten.chips, producten.bonen];

var index = 0
var start = groch[index].name;
var currentClass;

var product = $("#product");
var productName = $("#productName");
var productLocation = $("#productLocation");
var productDescription = $("#productDescription");

product.html(start);
changeInfo(groch[index]);
document.getElementById("middleBox").style.height = window.innerHeight - 100;

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
    if(index == 0) {
        index = groch.length-1;
    } else {index--}

    list = groch[index]

    product.html(list.name);
    var loc = groch[index].location
    currentClass = findClass(loc[0]).getMeterCoord(loc[1])
    mark.x = currentClass[0];
    mark.y = currentClass[1];
    changeInfo(list);
}

function changeInfo(list) {
    var format = list.location;

    productLocation.html(`Pad ${format[0]}  Meter ${format[1]} <br> Rang ${format[2]} Jada ${format[3]}`);
    productName.html(list.name);
    productDescription.html(list.description);
}