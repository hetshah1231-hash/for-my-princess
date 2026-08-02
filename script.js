const PASSWORD = "Sanu baby";

const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");

function showPage(id){
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function checkPassword(){

    const pass = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if(pass === PASSWORD){

        if(music){
            music.play().catch(()=>{});
        }

        const doors = document.getElementById("doors");

doors.style.display = "block";

setTimeout(() => {
    doors.classList.add("open");
}, 100);

setTimeout(() => {
    doors.style.display = "none";
    showPage("page2");
    typeWelcome();
    
    setTimeout(() => {
    alert("❤️ Welcome My Princess Saniya ❤️");
}, 2000);
    
}, 1700);

    }else{
        error.innerHTML = "❌ Wrong Password";
    }

}

let welcomeText =
"Hi Saniya ❤️\n\nWelcome to your little surprise.\nEvery page has been made with love just for you.";

let i = 0;

function typeWelcome(){

    document.getElementById("typing").innerHTML="";

    i=0;

    function typing(){

        if(i < welcomeText.length){

            document.getElementById("typing").innerHTML += welcomeText.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}

function goEnvelope(){
    showPage("page3");
}

function openLetter(){
    
const env = document.querySelector(".envelope-container");
env.classList.add("open");
    
setTimeout(() => {
    showPage("page4");
}, 1000);

const text=`Dear Saniya ❤️

Happy Girlfriend Day ❤️

You are the most beautiful part of my life.

Your smile makes every bad day better.

Thank you for always being with me.

No matter what happens,
I'll always choose you.

Forever Yours,

Het ❤️`;

    let j=0;

    document.getElementById("loveLetter").innerHTML="";

    function write(){

        if(j<text.length){

            document.getElementById("loveLetter").innerHTML+=text.charAt(j);

            j++;

            setTimeout(write,30);

        }

    }

    write();

}

function goProposal(){
    showPage("page5");
}

document.getElementById("yesBtn").onclick = function(){

    fireworks();
    heartExplosion();
    confettiRain();
    this.innerHTML = "❤️ Forever Together ❤️";
    this.style.background = "hotpink";

    setTimeout(() => {

        document.body.innerHTML = `

        <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        height:100vh;
        background:#000;
        color:white;
        text-align:center;
        ">

        <h1 style="font-size:90px;">💖</h1>

        <h2 style="font-size:50px;font-family:'Great Vibes',cursive;">
        Happy Girlfriend Day
        </h2>

        <h1 style="color:#ff77b7;">
        Saniya ❤️
        </h1>

        <p style="font-size:22px;">
        Thank You For Being My Everything ❤️
        <br><br>
        Forever Yours,<br>
        Het ❤️
        </p>

        </div>

        `;

    },2000);

};
    },300);

});

});
document.getElementById("yesBtn").addEventListener("click",()=>{

document.body.innerHTML=`

<div style="
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100vh;
background:radial-gradient(circle,#220022,#000);
color:white;
text-align:center;
overflow:hidden;
">

<h1 style="
font-size:90px;
animation:pulse 1s infinite;
">

❤️

</h1>

<h2 style="
font-family:'Great Vibes',cursive;
font-size:60px;
color:#ff6ca8;
">

Happy Girlfriend Day

</h2>

<h1>

Saniya ❤️

</h1>

<p style="font-size:24px;line-height:1.8">

Every moment with you is my favorite memory.

Thank you for loving me.

I promise to stand beside you,

today,

tomorrow,

and always.

❤️

<br><br>

Forever Yours,

<b>Het ❤️</b>

</p>

</div>

`;

});
document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});
function fireworks(){

for(let i=0;i<40;i++){

let f=document.createElement("div");

f.className="firework";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

f.style.background=`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(f);

setTimeout(()=>{

f.remove();

},1200);

}

}
function openRing(){

    const box = document.querySelector(".ring-box");

    box.classList.add("open");

    setTimeout(()=>{

        fireworks();

 },700);

}

}
setInterval(()=>{

let s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},3000);

},250);
window.onload = function(){

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},3000);

}
function toggleMusic(){

const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

if(music.paused){

music.play();

btn.innerHTML="⏸ Pause Music";

}else{

music.pause();

btn.innerHTML="🎵 Play Music";

}

}
function heartExplosion(){

    for(let i=0;i<25;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left="50%";
        heart.style.top="50%";
        heart.style.fontSize="30px";
        heart.style.pointerEvents="none";
        heart.style.zIndex="9999";

        let x=(Math.random()-0.5)*500;
        let y=(Math.random()-0.5)*500;

        heart.animate([
            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) scale(0.5)`,
                opacity:0
            }
        ],{
            duration:1800
        });

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),1800);

    }

}
function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("petals").appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,500);
function createButterfly(){

const b=document.createElement("div");

b.className="butterfly";

b.innerHTML="🦋";

b.style.left="-80px";

b.style.top=Math.random()*80+"vh";

b.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},12000);

}

setInterval(createButterfly,4000);
const messages=[
"❤️ I Love You",
"🌹 Forever Together",
"💖 You Are My Happiness",
"🥰 My Princess",
"💍 Het ❤️ Saniya"
];

setInterval(()=>{

let t=document.createElement("div");

t.innerHTML=messages[Math.floor(Math.random()*messages.length)];

t.style.position="fixed";
t.style.left=Math.random()*80+"vw";
t.style.bottom="-50px";
t.style.color="white";
t.style.fontSize="22px";
t.style.zIndex="1000";
t.style.transition="6s linear";

document.body.appendChild(t);

setTimeout(()=>{
t.style.bottom="110vh";
t.style.opacity="0";
},100);

setTimeout(()=>{
t.remove();
},6000);

},3500);
const reasons=[
"❤️ Because your smile makes my day.",
"🌹 Because you understand me.",
"🥰 Because you're my safe place.",
"💖 Because every moment with you is special.",
"💍 Because I want forever with you.",
"✨ Because you are my Princess.",
"💕 Because life is beautiful with you.",
"❤️ Because I love you endlessly."
];

let reasonIndex=0;

setInterval(()=>{

const box=document.getElementById("reasonBox");

if(box){

box.innerHTML=reasons[reasonIndex];

reasonIndex=(reasonIndex+1)%reasons.length;

}

},3000);
function updateCountdown(){

    const el = document.getElementById("countdown");

    if(!el) return;

    const now = new Date();

    el.innerHTML =
    "❤️ " +
    now.toLocaleDateString() +
    "<br>" +
    now.toLocaleTimeString();
}

setInterval(updateCountdown,1000);

updateCountdown();
document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

let h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";
h.style.left=e.clientX+"px";
h.style.top=e.clientY+"px";
h.style.fontSize="22px";
h.style.pointerEvents="none";
h.style.transition="1.5s";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform=`translate(${(Math.random()-0.5)*150}px,-120px)`;
h.style.opacity="0";

},50);

setTimeout(()=>{

h.remove();

},1500);

}

});
function confettiRain(){

const colors=[
"#ff2d75",
"#ffd700",
"#00e5ff",
"#ffffff",
"#7CFC00",
"#ff66cc"
];

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=
colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=
(3+Math.random()*3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

}

}
