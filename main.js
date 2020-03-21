function product(name, location, description, voorraad) {
    this.name = name;
    this.location = location; // [pad, meter, rang, ...]
    this.description = description;
    this.voorraad = voorraad;
}

var producten = {
    appels: new product("Appels", [3, 4, 7, 2], "Heel lekker", 32),
    kaas: new product("Kaas", [4, 4, 7, 2], "Heel lekker", 32),
    brood: new product("Brood", [5, 4, 7, 2], "Heel lekker", 32),
    chips: new product("Chips", [6, 4, 7, 2], "Heel lekker", 32),
    bonen: new product("Bonen", [7, 4, 7, 2], "Heel lekker", 32),
}

var groch = [producten.appels, producten.kaas, producten.brood, producten.chips, producten.bonen];

var index = Math.ceil((groch.length-1)/2);
var start = groch[index].name;
var prod = document.getElementById("product");
var currentClass;

prod.innerHTML = start;
document.getElementById("middleBox").style.height = window.innerHeight - 100;

function createLI() {
    var str = "<ul>";
    document.getElementById("slides").innerHTML = "";

    groch.forEach(function(slide) {
        str += "<li>" + slide + "</li>";
    });
    str += "</ul>";
    document.getElementById("slides").innerHTML = str;
}

function next() {
    if(index == groch.length-1) {
        index = 0;
    } else {index++}

    prod.innerHTML = groch[index].name
    currentClass = findClass(groch[index].location[0])
    mark.x = currentClass.x;
    mark.y = currentClass.y;
}

function prev() {
    if(index == 0) {
        index = groch.length-1;
    } else {index--}

    prod.innerHTML = groch[index].name;
}

function render(index) {

}

