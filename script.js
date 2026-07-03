// ================================
// Birthday Website Script - Part 1
// ================================

let currentPage = 1;
const totalPages = 5;

// Show Page
function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    const active = document.getElementById("page"+page);

    if(active){

        active.classList.add("active");
        active.classList.add("fade");

        setTimeout(()=>{
            active.classList.remove("fade");
        },800);

    }

    currentPage = page;

}

// Next
function nextPage(page){

    if(page<=totalPages){

        showPage(page);

    }

}

// Back
function prevPage(page){

    if(page>=1){

        showPage(page);

    }

}

// ================================
// Floating Hearts
// ================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(Math.random()*4+4)+"s";

    heart.style.fontSize=(Math.random()*18+18)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,500);

// ================================
// Sparkles
// ================================

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(createSparkle,350);

// ================================
// Gallery Image Zoom
// ================================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        if(img.style.transform==="scale(1.6)"){

            img.style.transform="scale(1)";

            img.style.zIndex="1";

        }else{

            img.style.transform="scale(1.6)";

            img.style.zIndex="999";

        }

    });

});

// ================================
// Keyboard Navigation
// ================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage<totalPages){

            nextPage(currentPage+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentPage>1){

            prevPage(currentPage-1);

        }

    }

});

// ================================
// Show First Page
// ================================

showPage(1);
// =========================
// Background Music
// =========================

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();
musicBtn.innerHTML="⏸ Pause";

}else{

music.pause();
musicBtn.innerHTML="🎵 Music";

}

playing=!playing;

});

// =========================
// Confetti
// =========================

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="12px";

c.style.background=`hsl(${Math.random()*360},100%,50%)`;

c.style.pointerEvents="none";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="100vh";

c.style.transform=`rotate(${Math.random()*720}deg)`;

},20);

setTimeout(()=>{

c.remove();

},4200);

}

}

// =========================
// Fireworks
// =========================

function firework(){

const box=document.getElementById("fireworks");

for(let i=0;i<35;i++){

const f=document.createElement("div");

f.className="firework";

f.style.background=`hsl(${Math.random()*360},100%,60%)`;

f.style.left="50%";

f.style.top="50%";

box.appendChild(f);

let x=(Math.random()-0.5)*500;
let y=(Math.random()-0.5)*500;

setTimeout(()=>{

f.style.transition="1s";

f.style.transform=`translate(${x}px,${y}px)`;

f.style.opacity="0";

},30);

setTimeout(()=>{

f.remove();

},1200);

}

}

// =========================
// Auto Effects
// =========================

setInterval(firework,5000);

setTimeout(confetti,1000);

// =========================
// Confetti on Last Page
// =========================

const oldShow=showPage;

showPage=function(page){

oldShow(page);

if(page===5){

confetti();

firework();

}

}