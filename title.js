/*$(document).ready(function(){
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
});*/
$(document).ready(function(){
    //$(document).scrollTop(0);
    $("#hola").animate({bottom: '30px', opacity: '1'}, 3000);
    var i = 0;
    function update() {
        if (i > 0) {
            $("#subtitle").animate({bottom: '30px', opacity: '1'}, 1500);
            clearInterval(myVar);
        }
        i++;
    }
    var myVar = setInterval(update, 500);
});