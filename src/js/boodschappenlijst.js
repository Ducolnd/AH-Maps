var productInput = $("#productText");
var htmlString = "";
// var groch = [producten....]

function addProduct() {
    if(!(product.val() == "")) {
		groch.push(producten[ productInput.val().toLowerCase() ]);
		productInput.val("");
		refreshTable();
	}
}

function refreshTable() {
	for(var product of groch) {
		htmlString += `<tr>
		<td>${product.name}</td>
		<td>${product.name}</td>
		<td>${product.name}</td>
		<td>${product.name}</td>
		
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

// for(var i = 0; i < 1000; i++) {
//     a.push(barCodeReturn())
// }

function setup() {
	refreshTable()
}