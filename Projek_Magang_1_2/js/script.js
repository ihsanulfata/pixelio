// ================= LENIS SMOOTH SCROLL =================

if(typeof Lenis !== "undefined"){

const lenis = new Lenis({
    duration:1.2,
    smooth:true,
    easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t))
});

lenis.on("scroll",ScrollTrigger.update);

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

}

// ================= GSAP =================

gsap.registerPlugin(ScrollTrigger);

// ================= HORIZONTAL PORTFOLIO =================

window.addEventListener("load",()=>{

const track=document.querySelector(".portfolio-track");
const portfolio=document.querySelector(".portfolio");

if(track && portfolio){

let amount=track.scrollWidth-window.innerWidth;

if(amount>0){

gsap.to(track,{
    x:-amount,
    ease:"none",
    scrollTrigger:{
        trigger:portfolio,
        start:"top top",
        end:()=>"+="+amount,
        pin:true,
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true
    }
});

}

ScrollTrigger.refresh();

}

});

// ================= HEADER ANIMATION =================

gsap.from("header .logo, header nav a, header .btn",{

    opacity:0,
    y:-25,
    duration:1,
    stagger:.08,
    ease:"power3.out"

});

// ================= HERO ANIMATION =================

gsap.from(".hero-content",{
    opacity:0,
    y:60,
    duration:1.2,
    ease:"power3.out"
});

// ================= ABOUT ANIMATION =================

gsap.from(".about-title span, .about-title h2",{

    opacity:0,
    y:40,
    duration:1,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".about",
        start:"top 75%",
        once:true
    }

});

gsap.from(".about-content .big-text, .about-content > p",{

    opacity:0,
    y:30,
    duration:1,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".about-content",
        start:"top 80%",
        once:true
    }

});

gsap.from(".about-stats > div",{

    opacity:0,
    y:30,
    duration:.8,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".about-stats",
        start:"top 85%",
        once:true
    }

});

// Counter number animation (50+, 20+, 5+)
gsap.utils.toArray(".about-stats h3").forEach(stat=>{

    const target=parseInt(stat.textContent);
    const counter={val:0};

    gsap.to(counter,{
        val:target,
        duration:1.8,
        ease:"power2.out",
        scrollTrigger:{
            trigger:stat,
            start:"top 85%",
            once:true
        },
        onUpdate:()=>{
            stat.textContent=Math.floor(counter.val)+"+";
        }
    });

});

// ================= SERVICES ANIMATION =================

gsap.from(".services h2, .services-tagline",{

    opacity:0,
    y:30,
    duration:1,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".services",
        start:"top 80%",
        once:true
    }

});
gsap.from(".service-image img",{

    opacity:0,
    y:50,
    scale:.96,
    duration:1,
    stagger:.2,
    ease:"power3.out",

    scrollTrigger:{
        trigger:"#services",
        start:"top 75%",
        once:true
    }

});


// ================= WHY ANIMATION =================

gsap.from(".why-title span, .why-title h2",{

    opacity:0,
    y:40,
    duration:1,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".why",
        start:"top 75%",
        once:true
    }

});

gsap.from(".why-image img",{

    opacity:0,
    scale:.92,
    x:-40,
    duration:1.2,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".why-image",
        start:"top 80%",
        once:true
    }

});

gsap.from(".why-item",{

    opacity:0,
    x:40,
    duration:1,
    stagger:.2,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".why-content",
        start:"top 80%",
        once:true
    }

});

// Idle floating animation for Why image
gsap.to(".why-image img",{

    y:18,
    duration:2.2,
    ease:"sine.inOut",
    yoyo:true,
    repeat:-1,
    delay:1.4

});

// ================= PORTFOLIO ANIMATION =================

gsap.utils.toArray(".portfolio-item img").forEach(img=>{

gsap.from(img,{
opacity:0,
y:100,
scale:.95,
duration:1.3,
ease:"power3.out",
scrollTrigger:{
trigger:img,
start:"top 85%",
once:true
}

});

});



// ================= EXTRA PORTFOLIO EFFECTS =================

gsap.utils.toArray(".portfolio-item img").forEach(img=>{

    gsap.to(img,{
        y:-25,
        ease:"none",
        scrollTrigger:{
            trigger:img,
            scrub:1
        }
    });

});


// ================= TEXT REVEAL =================

gsap.utils.toArray(".portfolio-info h3, .portfolio-header h2").forEach(text=>{

    gsap.from(text,{
        opacity:0,
        y:40,
        duration:1,
        ease:"power3.out",
        scrollTrigger:{
            trigger:text,
            start:"top 85%",
            once:true
        }
    });

});
// ================= FOOTER ANIMATION =================

gsap.from(".footer-logo, .footer-column",{

    opacity:0,
    y:40,
    duration:1,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".footer",
        start:"top 90%",
        once:true
    }

});

// ================= PIXEL CURSOR =================

const pixel=document.querySelector(".pixel-field");

let mouseX=0;
let mouseY=0;

let pixelX=0;
let pixelY=0;


document.addEventListener("mousemove",e=>{

    mouseX=e.clientX;
    mouseY=e.clientY;

});


function animateCursor(){

    if(pixel){

        pixelX+=(mouseX-pixelX)*0.12;
        pixelY+=(mouseY-pixelY)*0.12;

        pixel.style.left=pixelX+"px";
        pixel.style.top=pixelY+"px";

    }

    requestAnimationFrame(animateCursor);

}

animateCursor();


// ================= CURSOR HOVER EFFECT =================

document.querySelectorAll("a, button, .service-image, .portfolio-item, .why-image").forEach(el=>{

    el.addEventListener("mouseenter",()=>{

        if(pixel){
            pixel.style.transform="translate(-50%,-50%) scale(2.4)";
            pixel.style.background="#0475da";
            pixel.style.opacity=".3";
        }

    });

    el.addEventListener("mouseleave",()=>{

        if(pixel){
            pixel.style.transform="translate(-50%,-50%) scale(1)";
            pixel.style.background="#ffdf04";
            pixel.style.opacity=".5";
        }

    });

});


// ================= PIXEL TRAIL =================

function createPixelTrail(){

    const trail=document.createElement("div");

    trail.className="pixel-trail";

    trail.style.left=(pixelX+(Math.random()*30-15))+"px";

    trail.style.top=(pixelY+(Math.random()*30-15))+"px";


    document.body.appendChild(trail);


    setTimeout(()=>{

        trail.remove();

    },700);

}


setInterval(createPixelTrail,150);


// ================= PORTFOLIO DATA =================

const portfolioData={

packaging:[
"assets/portfolio/packaging/1.png",
"assets/portfolio/packaging/2.png",
"assets/portfolio/packaging/3.png",
"assets/portfolio/packaging/4.png",
"assets/portfolio/packaging/5.png"
],

social:[
"assets/portfolio/social-media/1.png",
"assets/portfolio/social-media/2.png",
"assets/portfolio/social-media/3.png"
],

editorial:[
"assets/portfolio/editorial/7.jpg",
"assets/portfolio/editorial/8.png",
"assets/portfolio/editorial/9.jpg"
],

uniform:[
"assets/portfolio/uniform/GUMREGAH Rompi.png",
"assets/portfolio/uniform/GumregahRompi-02.jpg",
"assets/portfolio/uniform/GumregahRompi-03.jpg",
"assets/portfolio/uniform/Gumregahrompi.jpg",
"assets/portfolio/uniform/NAK Baju Lapang.png"
]

};


let currentImages=[];
let currentIndex=0;


const categoryName={

packaging:"Packaging Design",
social:"Social Media Kit",
editorial:"Editorial Design",
uniform:"Uniform Design"

};


// ================= GALLERY =================

function openGallery(category){

currentImages=portfolioData[category];

const galleryImages=document.getElementById("galleryImages");
const title=document.getElementById("galleryTitle");


galleryImages.innerHTML="";

title.innerHTML=categoryName[category];


currentImages.forEach((image,index)=>{

galleryImages.innerHTML+=`

<img src="${image}" onclick="openImage(${index})">

`;

});


document.getElementById("galleryModal").classList.add("active");

}



function closeGallery(){

document.getElementById("galleryModal").classList.remove("active");

}



function openImage(index){

currentIndex=index;

document.getElementById("previewImage").src=currentImages[currentIndex];

document.getElementById("imageModal").classList.add("active");

}



function closeImage(){

document.getElementById("imageModal").classList.remove("active");

}



function nextImage(){

currentIndex++;

if(currentIndex>=currentImages.length){

currentIndex=0;

}

document.getElementById("previewImage").src=currentImages[currentIndex];

}



function prevImage(){

currentIndex--;

if(currentIndex<0){

currentIndex=currentImages.length-1;

}

document.getElementById("previewImage").src=currentImages[currentIndex];

}


// ================= CLOSE MODAL =================

const galleryModal=document.getElementById("galleryModal");

const imageModal=document.getElementById("imageModal");


if(galleryModal){

galleryModal.addEventListener("click",e=>{

if(e.target.id==="galleryModal"){

closeGallery();

}

});

}


if(imageModal){

imageModal.addEventListener("click",e=>{

if(e.target.id==="imageModal"){

closeImage();

}

});

}