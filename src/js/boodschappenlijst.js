var product = $("#productText");
var grocheries = [];

function addProduct() {
    if(!(product.val() === "")) {
		grocheries.push(product.val());
		product.val("");
		refreshTable();
	}
}

function refreshTable() {
	// for()
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

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var a = []

function barCodeReturn() {
    return Math.ceil(Math.random() * 10e9);
}

// for(var i = 0; i < 1000; i++) {
//     a.push(barCodeReturn())
// }