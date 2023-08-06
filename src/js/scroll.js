//navbar
window.addEventListener("scroll", function(){
    const vant = document.getElementById("navbar2");
    if (this.scrollY <= 500){
        vant.style.opacity = "0";
        vant.style.transition = "700ms";

    }else{
        vant.style.opacity = "1";
        vant.style.position = "fixed";

    }
}, false);

//navegador3

// const vant = document.getElementById("navbar2e");


    // if (this.scrollY <= 500){
    //     vant.style.opacity = "0";
    //     vant.style.transition = "700ms";

    // }else{
    //     vant.style.opacity = "1";
    //     vant.style.position = "fixed";

    // }
//about
window.addEventListener("scroll", function(){
    const vont = document.getElementById("text1");
    if (this.scrollY >= 300){
        vont.style.margin = "0% 0px 0px 0%";
        vont.style.transition = "1400ms";
    }else{
        vont.style.margin = "0% 30% 0% 0%";
    }
}, false);
//services
window.addEventListener("scroll", function(){
    const vent = document.getElementById("fart1");
    const vint = document.getElementById("fart2");
    const vunt = document.getElementById("shat");


    if (this.scrollY >= 800){
        vent.style.margin = "0% 0% 0% 3%";
        vent.style.transition = "1400ms";
        vint.style.marginLeft = "3%";
        vint.style.transition = "1400ms";
        vunt.style.marginBottom = "3%";
        vunt.style.transition = "1400ms";
    }else{
        vent.style.margin = "0% 0% 0% -130%";
        vint.style.margin = "0% 0% 0% -130%";
        vunt.style.margin = "0% 0% 0% 3%";
    }
}, false);
//Skills
window.addEventListener("scroll", function(){
    const fent = document.getElementById("logs3");
    const fint = document.getElementById("relle3");
    const funt = document.getElementById("text31");


    if (this.scrollY >= 1550){
        fent.style.transition = "800ms";
        fent.style.opacity = "1"
        fint.style.opacity = "1";
        fint.style.transition = "1200ms";
        funt.style.marginLeft = "12%";
        funt.style.transition = "1400ms";
    }else{
        fent.style.opacity = "0";
        fint.style.opacity = "0";
        funt.style.marginLeft = "-130%";
    }
}, false);
window.addEventListener("scroll", function(){
    const sent = document.getElementById("imgs4");
    const sint = document.getElementById("text4p");

    if (this.scrollY >= 2250){
        // sent.style.margin = "-36% 0% 0% 3%";
        sent.style.transition = "900ms";
        sint.style.margin = "-50% 0% 0% 15%";
        sint.style.transition = "1000ms";

    }else{
        sent.style.marginBottom = "150%";
        sint.style.margin = "10% 0% 0% 0%";
    }
}, false);
//Contact
window.addEventListener("scroll", function(){
    const tent = document.getElementById("fore");
    const tint = document.getElementById("box2");



    if (this.scrollY >= 2750){
        tent.style.opacity = "1";
        tent.style.transition = "900ms";
        tint.style.opacity = "1";
        tint.style.transition = "1000ms";

    }else{
        tent.style.opacity = "0";
        tint.style.opacity = "0";
    }
}, false);


