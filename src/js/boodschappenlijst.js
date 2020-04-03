var productInput = $("#productText");
var htmlString = "";
var readyInList = $("#readyInList");
var save = false;

window.onbeforeunload = function (){
	window.alert("Je boodschappenlijst gaat verloren.");
	console.log("chese")
	return null;
};

readyInList.hide();
// var groch = [producten....]

function addProduct() {
	readyInList.hide()
    if(!(productInput.val() == null)) {
		if(inObject(producten, productInput.val())) {
			if(!(inList(groch, productInput.val()))) {
				groch.push(producten[ productInput.val().toLowerCase() ]);
				productInput.val("");
				refreshTable();
			} else { readyInList.show() }
		}
	}
}

function refreshTable() {
	for(var product of groch) {
		htmlString += `<tr>
		<td><img src="../static/${product.barCode}.jpg"></img></td>
		<td>${product.name}</td>
		<td>${product.description}</td>
		<td>${product.location}</td>
		</tr>`
	}
	$("#productTable").html(htmlString);
	htmlString = ""
}

function removeProduct(product) {

}

function save() {

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue.join(" ") + ";" + expires + ";path=/";
}

// var a = []

function barCodeReturn() {
    return Math.ceil(Math.random() * 10e9);
}

function inObject(list, item) {
	if(Object.keys(list).indexOf(item.toLowerCase()) > -1) {
		return true
	} 
	return false
}

function inList(list, item) {
	for(var a of list) {
		if(a.name.toLowerCase() == item.toLowerCase()) {
			return true
		}
	}
	return false
}

// for(var i = 0; i < 1000; i++) {
//     a.push(barCodeReturn())
// }

function setup() {
	refreshTable()
}