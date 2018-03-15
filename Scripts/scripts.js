/// <reference path="jquery-3.3.1.min.js"/>
function openNav() {
    document.getElementById("sideNav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "171px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function prjAcc() {
    var x = document.getElementById("prjAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-green", "");
    }
}
