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
height:100vh;
flex-direction:column;
background:black;
color:white;
text-align:center;
overflow:hidden;
">

<h1 style="
font-size:90px;
font-family:Great Vibes;
color:#ff6ca8;
animation:pulse 1s infinite;
">

❤️ I LOVE YOU ❤️

</h1>

<h2>

Happy Girlfriend Day Saniya ❤️

</h2>

<p>

Forever Yours,<br>

Het ❤️

</p>

<div style="font-size:60px;margin-top:40px">

🎆 🎇 💖 🌹 💍 ❤️ 🎆

</div>

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
