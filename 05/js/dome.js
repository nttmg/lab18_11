window.onload = init;

function init() {
    document.getElementById("bt1").onclick = changeHeading1;
    document.getElementById("bt2").onclick = changeHeading2;
}
function changeHeading1() {
    var elm = document.getElementById("heading1");
    elm.innerHTML = "Hello";
}
function changeHeading2() {
    var elms = document.getElementsByTagName("h2");
    
    for(var i=0; elms.length; i++) {
        elms[i].innerHTML = "Hello World";
    }
}