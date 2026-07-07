const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bubble = document.getElementById("bubble");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");

let tries = 0;

const texts = [
    "Jesi li sigurna? 😊",
    "Možda ipak razmisliš. ☕",
    "Kafa je slađa u dvoje ❤️",
    "Ne odustajem tako lako 😄",
    "Još jednom probaj 😉",
    "Biće nam baš lepo ☕",
    "Skoro si me uhvatila 😅",
    "Nemoj tako brzo reći ne ❤️",
    "Poslednji pokušaji 😄",
    "Dobro... poštujem tvoj izbor 😢"
];

function randomPosition(){

    const maxX = buttons.clientWidth - noBtn.offsetWidth;
    const maxY = buttons.clientHeight - noBtn.offsetHeight;

    const x = Math.floor(Math.random() * Math.max(20,maxX));
    const y = Math.floor(Math.random() * Math.max(20,maxY));

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    bubble.style.left = (noBtn.getBoundingClientRect().left - 10) + "px";
    bubble.style.top = (noBtn.getBoundingClientRect().top - 55) + "px";

}

function moveButton(){

    if(tries>=10){
        showRespectScreen();
        return;
    }

    noBtn.style.animation="shake .18s";

    setTimeout(()=>{
        noBtn.style.animation="";
    },180);

    bubble.innerHTML=texts[tries];
    message.innerHTML="💬 "+texts[tries];

    bubble.style.opacity="1";
    message.style.opacity="1";

    randomPosition();

    tries++;

    yesBtn.style.transform=`scale(${1+tries*0.08})`;

    setTimeout(()=>{
        bubble.style.opacity="0";
        message.style.opacity="0";
    },1500);

}
function showRespectScreen(){

document.body.innerHTML=`

<div class="fullscreen" style="background-image:url('pozadina.jpg')">

<div class="overlay">

<h1>😢</h1>

<h2>Poštujem tvoj izbor.</h2>

<p>

Ako se nekad predomisliš...

<br><br>

Kafa će i dalje čekati. ☕❤️

</p>

<button class="returnBtn" onclick="location.reload()">

❤️ Predomislila sam se

</button>

</div>

</div>

`;

}

function showSuccessScreen(){

document.body.innerHTML=`

<div class="fullscreen">

<div class="overlay">

<img src="jeeeeee.jpg">

<h1>🎉 JEEEEE! 🎉</h1>

<p>

Vidimo se večeras na kafi. ☕❤️

<br><br>

Samo mi pošalji kada i gde da dođem.

</p>

<h2>Stefan ❤️</h2>

</div>

</div>

`;

}

yesBtn.addEventListener("click",showSuccessScreen);

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

});
window.addEventListener("load",()=>{

    noBtn.style.left=
    (buttons.clientWidth-noBtn.offsetWidth)+"px";

    noBtn.style.top="0px";

});

window.addEventListener("resize",()=>{

    const maxX=buttons.clientWidth-noBtn.offsetWidth;
    const maxY=buttons.clientHeight-noBtn.offsetHeight;

    let x=parseInt(noBtn.style.left)||0;
    let y=parseInt(noBtn.style.top)||0;

    if(x>maxX)x=maxX;
    if(y>maxY)y=maxY;

    if(x<0)x=0;
    if(y<0)y=0;

    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

});

document.addEventListener("selectstart",(e)=>{
    if(e.target.tagName==="BUTTON"){
        e.preventDefault();
    }
});

document.addEventListener("dragstart",(e)=>{
    if(e.target.tagName==="BUTTON"){
        e.preventDefault();
    }
});
