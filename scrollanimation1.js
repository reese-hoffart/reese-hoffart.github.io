var scrollPos = 0;
var scrollPcnt = 0;
var height = $(document).height() - window.innerHeight;
let aboutpos = document.getElementById("about").getBoundingClientRect();
//console.log(aboutrel); //947
//My scroll height = 2150 atm
window.addEventListener('scroll', function(){ //check when scrolling
    scrollPos = $(document).scrollTop();
    scrollPcnt = (scrollPos / height) * 100;
    var aboutrel = document.getElementById("about").getBoundingClientRect();
    if (aboutrel.top == 0) {
        //document.getElementById('about').style.backgroundSize = (3 * window.innerHeight) - (scrollPos - aboutpos.top) * 2 + "px";
        $("#about").css("backgroundSize", (3 * window.innerHeight) - (scrollPos - aboutpos.top) * 2);
        //if (!(parseInt($("#about").css("backgroundSize")) <= window.innerHeight)) {
        //    $("#abouth").css("opacity", 0);
        //    $("#aboutp").css("opacity", 0);
        //}
        //if (parseInt($("#about").css("backgroundSize")) <= window.innerHeight) {
        //    $("#about").css("backgroundSize", window.innerHeight);
            $("#abouth").css("opacity", (scrollPos - (aboutpos.top + window.innerHeight)) / 500);
            $("#aboutp").css("opacity", (scrollPos - (aboutpos.top + window.innerHeight) * 1.1) / 500);
        //}
    }
    $("#hola").css("opacity", ((window.innerHeight / 1.7) - scrollPos) / 400);
    $("#subtitle").css("opacity", ((window.innerHeight / 2.2) - scrollPos) / 400);
});