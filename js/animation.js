window.addEventListener("load", () => {

    const progressBar = document.querySelector(".progress-bar");
    const percentage = document.querySelector(".percentage");
    const loaderText = document.querySelector(".loader-text");

    let progress = 0;

    const messages = [
        "INITIALIZING AI CORE...",
        "LOADING 3D ASSETS...",
        "CONNECTING NEURAL SYSTEM...",
        "RENDERING EXPERIENCE...",
        "OPTIMIZING INTERFACE...",
        "ACCESS GRANTED"
    ];

    function updateMessage(value) {

        if (value < 20) {
            loaderText.innerHTML = messages[0];
        } else if (value < 40) {
            loaderText.innerHTML = messages[1];
        } else if (value < 60) {
            loaderText.innerHTML = messages[2];
        } else if (value < 80) {
            loaderText.innerHTML = messages[3];
        } else if (value < 100) {
            loaderText.innerHTML = messages[4];
        } else {
            loaderText.innerHTML = messages[5];
        }

    }

    function animateLoader() {

        if (progress < 100) {

            progress += Math.floor(Math.random() * 4) + 1;

            if (progress > 100) {
                progress = 100;
            }

            percentage.innerHTML = progress + "%";
            progressBar.style.width = progress + "%";

            updateMessage(progress);

            let speed = Math.random() * 120 + 40;

            setTimeout(animateLoader, speed);

        } else {

            loaderText.innerHTML = "ACCESS GRANTED";

            gsap.timeline()

                .to(".loader-logo", {
                    scale: 1.15,
                    duration: 0.3,
                    ease: "power2.out"
                })

                .to(".loader-logo", {
                    scale: 1,
                    duration: 0.3
                })

                .to(".loader-center", {
                    scale: 1.08,
                    duration: 0.5
                })
.to("#flash", {

    opacity: 1,
    duration: 0.15

})

.to("#flash", {

    opacity: 0,
    duration: 0.5

})
                .to("#loader", {
                    opacity: 0,
                    duration: 1,
                    delay: 0.5,
                    onComplete: () => {

    const loader = document.getElementById("loader");

    loader.style.display = "none";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

}
                });

        }

    }

    animateLoader();

});
/*========================================
        ABOUT V2 ANIMATION
========================================*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".mh-about-card").forEach((card)=>{

    gsap.from(card,{

        y:100,

        opacity:0,

        scale:.92,

        duration:1,

        ease:"power4.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%",

            end:"bottom 20%",

            toggleActions:"play reverse play reverse"

        }

    });

});

/*========== CARD TILT ==========*/

document.querySelectorAll(".mh-about-card").forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*14;

        const rotateX=((rect.height/2-y)/rect.height)*14;

        gsap.to(card,{

            rotationX:rotateX,

            rotationY:rotateY,

            transformPerspective:1200,

            duration:.35,

            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            rotationX:0,

            rotationY:0,

            duration:.45

        });

    });

});
/*========================================
        SERVICES V2
========================================*/

gsap.utils.toArray(".mh-service-card").forEach((card)=>{

    gsap.from(card,{
        y:100,
        opacity:0,
        scale:.9,
        duration:1,
        ease:"power4.out",

        scrollTrigger:{
            trigger:card,
            start:"top 85%",
            end:"bottom 20%",
            toggleActions:"play reverse play reverse"
        }

    });

});

document.querySelectorAll(".mh-service-card").forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*12;
        const rotateX=((rect.height/2-y)/rect.height)*12;

        gsap.to(card,{
            rotationX:rotateX,
            rotationY:rotateY,
            transformPerspective:1200,
            duration:.35,
            ease:"power2.out"
        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{
            rotationX:0,
            rotationY:0,
            duration:.45
        });

    });

});

const projects = [

{
title:"Movie Mint",
type:"backend",
description:"Premium Movie Booking Platform built using HTML, CSS, JS, PHP & MySQL.",
image:"assets/images/movie.png",
tags:["HTML","CSS","JS","PHP","MySQL"],
details:"project-movie.html"
},

{
title:"Lost Link",
type:"backend",
description:"AI Powered Lost & Found platform with smart matching system.",
image:"assets/images/lost.png",
tags:["HTML","CSS","JS","PHP","AI"],
details:"project-lost-link.html"
},

{
title:"Vinegar Food",
type:"frontend",
description:"Modern restaurant website with premium UI and online ordering.",
image:"assets/images/vinegar.png",
tags:["HTML","CSS","JS"],
live:"https://your-demo-link.com",
details:"vinegar.foods.html"
},

{
title:"Lawyer Master",
type:"backend",
description:"Professional lawyer website with appointment system.",
image:"assets/images/lawyer.png",
tags:["HTML","CSS","JS","PHP","MySQL"],
details:"lawyerwebsite.html"
},

];

/*========================================
        PROJECT SLIDER
========================================*/

const centerImage = document.querySelector(".center img");
const centerTitle = document.querySelector(".project-content h3");
const centerDesc = document.querySelector(".project-content p");

const tags = document.querySelector(".project-tags");

const liveBtn = document.querySelector(".project-buttons a:first-child");
const detailBtn = document.querySelector(".project-buttons a:last-child");

const leftImage = document.querySelector(".left img");
const leftTitle = document.querySelector(".left h4");

const rightImage = document.querySelector(".right img");
const rightTitle = document.querySelector(".right h4");

let current = 0;

function renderSlider(){

    const left = (current - 1 + projects.length) % projects.length;
    const right = (current + 1) % projects.length;

    /* CENTER */

    centerImage.src = projects[current].image;

    centerTitle.textContent = projects[current].title;

    centerDesc.textContent = projects[current].description;

    /* TAGS */

    tags.innerHTML = "";

    projects[current].tags.forEach(tag => {

        const span = document.createElement("span");

        span.textContent = tag;

        tags.appendChild(span);

    });

    /* BUTTONS */

/* BUTTONS */

detailBtn.href = projects[current].details;

if(projects[current].type === "frontend"){

    liveBtn.style.display = "inline-flex";
    liveBtn.href = projects[current].live;

}else{

    liveBtn.style.display = "none";

}

    /* LEFT */

    leftImage.src = projects[left].image;

    leftTitle.textContent = projects[left].title;

    /* RIGHT */

    rightImage.src = projects[right].image;

    rightTitle.textContent = projects[right].title;

}

/* NEXT */

document.querySelector(".next").addEventListener("click",function(){

    current++;

    if(current >= projects.length){

        current = 0;

    }

    renderSlider();

});

/* PREVIOUS */

document.querySelector(".prev").addEventListener("click",function(){

    current--;

    if(current < 0){

        current = projects.length - 1;

    }

    renderSlider();

});

/* LOAD */

renderSlider();
/*========================================
        BUTTON SPOTLIGHT
========================================*/

document.querySelectorAll(".project-buttons a").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        button.style.setProperty("--x",x+"px");

        button.style.setProperty("--y",y+"px");

    });

});
gsap.utils.toArray(".why-card").forEach((card,index)=>{

    gsap.from(card,{

        x:index % 2 === 0 ? -120 : 120,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%",

            toggleActions:"play reverse play reverse"

        }

    });

});