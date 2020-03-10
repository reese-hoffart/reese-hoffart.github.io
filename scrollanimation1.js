var scrollPos = 0;
var scrollPcnt = 0;
var height = $(document).height() - window.innerHeight;
let aboutpos = document.getElementById("about").getBoundingClientRect();
//console.log(aboutrel); //947
//My scroll height = 2150 atm
window.addEventListener('scroll', function(){
    scrollPos = $(document).scrollTop();
    scrollPcnt = (scrollPos / height) * 100;
    //console.log(scrollPcnt);
    var aboutrel = document.getElementById("about").getBoundingClientRect();
    //console.log(aboutpos.top, aboutpos.right, aboutpos.bottom, aboutpos.left);
    /*if (scrollPos > 200) {
        document.getElementById('hola').style.opacity = Math.abs(((scrollPos - 200) / 350) - 1);
    }
    if (scrollPos > 50) {
        document.getElementById('subtitle').style.opacity = Math.abs(((scrollPos - 50) / 350) - 1);
    }*/
    if (aboutrel.top == 0) {
        document.getElementById('about').style.backgroundSize = (3 * window.innerHeight) - (scrollPos - aboutpos.top) * 2 + "px";
        if (!(parseInt($("#about").css("backgroundSize")) <= window.innerHeight)) {
            $("#abouth").css("opacity", 0);
            $("#aboutp").css("opacity", 0);
        }
        if (parseInt($("#about").css("backgroundSize")) <= window.innerHeight) {
            $("#about").css("backgroundSize", window.innerHeight);
            $("#abouth").css("opacity", (scrollPos - (aboutpos.top + window.innerHeight)) / 500);
            $("#aboutp").css("opacity", (scrollPos - (aboutpos.top + window.innerHeight) * 1.1) / 500);
        }
    }
    document.getElementById('hola').style.opacity = Math.abs(((scrollPcnt - 9.30) / 16.28) - 1);
    document.getElementById('subtitle').style.opacity = Math.abs(((scrollPcnt - 2.33) / 16.28) - 1);
});