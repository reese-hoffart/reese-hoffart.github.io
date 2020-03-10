var scrollPos = 0;
var scrollPcnt = 0;
var height = $(document).height() - window.innerHeight;
//My scroll height = 2150 atm
window.addEventListener('scroll', function(){
    scrollPos = $(document).scrollTop();
    scrollPcnt = (scrollPos / height) * 100;
    console.log(scrollPcnt);
    /*if (scrollPos > 200) {
        document.getElementById('hola').style.opacity = Math.abs(((scrollPos - 200) / 350) - 1);
    }
    if (scrollPos > 50) {
        document.getElementById('subtitle').style.opacity = Math.abs(((scrollPos - 50) / 350) - 1);
    }*/
    document.getElementById('hola').style.opacity = Math.abs(((scrollPcnt - 9.30) / 16.28) - 1);
    document.getElementById('subtitle').style.opacity = Math.abs(((scrollPcnt - 2.33) / 16.28) - 1);
});