const PASSWORD = "Sanu baby";

function checkPassword() {

    const input = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const music = document.getElementById("bgMusic");

    if (input === PASSWORD) {

        if (music) {
            music.play().catch(() => {});
        }

        document.body.style.transition = "1s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            document.body.innerHTML = `
            <div class="welcome-page">
                <h1>❤️ Welcome My Princess ❤️</h1>

                <h2>Saniya 👑</h2>

                <p id="typewriter"></p>

                <button onclick="nextPage()">
                    Continue ❤️
                </button>
            </div>
            `;

            document.body.style.opacity = "1";

            typeWriter();

        },1000);

    } else {

        error.innerHTML = "❌ Wrong Password";

        document.querySelector(".login-box").animate([
            {transform:"translateX(-10px)"},
            {transform:"translateX(10px)"},
            {transform:"translateX(-10px)"},
            {transform:"translateX(0px)"}
        ],{
            duration:400
        });

    }

}

const message =
"Hi Saniya ❤️\n\nSomeone loves you more than words can describe.\nToday is a small surprise made just for you...";

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typewriter").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

function nextPage(){

document.body.innerHTML=`

<div class="envelope-page">

<h1>💌</h1>

<h2>To My Princess Saniya ❤️</h2>

<div class="envelope" onclick="openLetter()">

<div class="cover"></div>

<div class="letter">
❤️ Open Me ❤️
</div>

</div>

<p>Tap the envelope</p>

</div>

`;

}
