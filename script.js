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

        showPage("page2");
        typeWelcome();

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

    showPage("page4");

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

document.getElementById("yesBtn").addEventListener("click",function(){

    alert("❤️ Yay! Forever Together ❤️");

});
