/*====================================
        HERO INTRO
====================================*/

window.addEventListener("load", () => {

    const tl = gsap.timeline({
        delay: 0.5
    });

    tl.to(".line", {

        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out"

    })

    .to(".hero-text", {

        y: 0,
        opacity: 1,
        duration: 0.8

    }, "-=0.4")

    .to(".hero-buttons", {

        y: 0,
        opacity: 1,
        duration: 0.8

    }, "-=0.4")

    .from("#robot", {

        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)"

    }, "-=1");

});


/*====================================
        CUSTOM CURSOR
====================================*/

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {

        x: e.clientX,
        y: e.clientY,
        duration: 0.25

    });

    gsap.to(dot, {

        x: e.clientX,
        y: e.clientY,
        duration: 0.08

    });

});

document.querySelectorAll("a,button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "70px";
        cursor.style.height = "70px";
        cursor.style.borderColor = "#8B5CF6";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "45px";
        cursor.style.height = "45px";
        cursor.style.borderColor = "#00F5FF";

    });

});


/*====================================
        NAVBAR SCROLL
====================================*/

window.addEventListener("scroll", () => {

    const nav = document.getElementById("navbar");

    if (window.scrollY > 80) {

        nav.style.top = "10px";
        nav.style.transform = "translateX(-50%) scale(.95)";

    } else {

        nav.style.top = "20px";
        nav.style.transform = "translateX(-50%) scale(1)";

    }

});


/*====================================
        MOUSE GLOW
====================================*/

const glow = document.querySelector(".mouse-glow");

window.addEventListener("mousemove", (e) => {

    gsap.to(glow, {

        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power3.out"

    });

});


/*====================================
        ROBOT CHECK
====================================*/

const robotModel = document.querySelector("#robot");

if (robotModel) {

    robotModel.addEventListener("load", async () => {

        console.log("✅ Model Loaded");

        try {

            const animations = await robotModel.availableAnimations;

            console.log("Animations:", animations);

        } catch (err) {

            console.log("No animations found");

        }

    });

}
/*========================================
        NAME VALIDATION
========================================*/

const nameInput = document.getElementById("name");

if(nameInput){

    nameInput.addEventListener("input", function(){

        this.value = this.value.replace(/[^A-Za-z ]/g, "");

    });

}
/*==================================
        BACK TO TOP
==================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
