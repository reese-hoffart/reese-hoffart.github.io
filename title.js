$(document).ready(function(){
    var titleString = "";
    var i = 0;
    var arr = ["R","e","e","s","e"," ","H","."];
    function update() {
        titleString += arr[i];
        i++;
        document.getElementById('hola').innerHTML = titleString;
        if (!(i < arr.length)) {
                $("#subtitle").fadeIn(1500);
            clearInterval(myVar);
        }
    }
    var myVar = setInterval(update, 100);
});