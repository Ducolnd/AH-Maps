function product(name, location, description, voorraad) {
    this.name = name;
    this.location = location; // [pad, meter, rang, ...]
    this.description = description;
    this.voorraad = voorraad;
}

var producten = {
    appels: new product("Appels", [3, 2, 7, 2], "Heel lekker", 32),
    kaas: new product("Kaas", [4, 4, 7, 2], "Heel lekker", 32),
    brood: new product("Brood", [5, 4, 7, 2], "Heel lekker", 32),
    chips: new product("Chips", [6, 4, 7, 2], "Heel lekker", 32),
    bonen: new product("Bonen", [7, 4, 7, 2], "Heel lekker", 32),
}

var groch = [producten.appels, producten.kaas, producten.brood, producten.chips, producten.bonen];

var index = 0
var start = groch[index].name;
var prod = document.getElementById("product");
var currentClass;



prod.innerHTML = start;
document.getElementById("middleBox").style.height = window.innerHeight - 100;

function next() {
    if(index == groch.length-1) {
        index = 0;
    } else {index++}

    prod.innerHTML = groch[index].name
    var loc = groch[index].location
    currentClass = findClass(loc[0]).getMeterCoord(loc[1])
    mark.x = currentClass[0];
    mark.y = currentClass[1];
}

function prev() {
    if(index == 0) {
        index = groch.length-1;
    } else {index--}

    prod.innerHTML = groch[index].name;
    var loc = groch[index].location
    currentClass = findClass(loc[0]).getMeterCoord(loc[1])
    mark.x = currentClass[0];
    mark.y = currentClass[1];
}

function render(index) {

}

