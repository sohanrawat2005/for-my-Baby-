const messages = {
sad: `
😔 Bad days don't stay forever.

Please be gentle with yourself today.

You're stronger than you think and more loved than you realize. ❤️
`,

hug: `
🤗 Virtual Hug Delivered.

Close your eyes for a second and imagine your Kuchuuuupuchuuu holding your hand and telling you, "You're going to be okay." ❤️🌸
`,

sleep: `
🌙 Before you sleep...

Let go of today's worries.

You deserve peaceful dreams, comfort and rest.

Good Night Dibbi ❤️
`,

miss: `
💭 If you're here because you miss me...

Just know that you're remembered more often than you realize.

Sending you a warm hug from this tiny corner of the internet. 💌
`
};

function showMessage(type){
const box = document.getElementById("messageBox");
box.style.display = "block";
box.innerHTML = messages[type];
}

function toggleLetter(){
const letter = document.getElementById("letter");

if(letter.style.display === "block"){
letter.style.display = "none";
}else{
letter.style.display = "block";
letter.scrollIntoView({
behavior:"smooth"
});
}
}

/* MUSIC */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const babyMusic = document.getElementById("babyMusic");


const babyBtn = document.getElementById("babyBtn");

musicBtn.addEventListener("click",()=>{
babyMusic.pause();
babyMusic.currentTime = 0;
babyBtn.innerHTML = "🎀 For My Baby";
if(music.paused){
music.play();
musicBtn.innerHTML="🩷 Playing Jaan";
}else{
music.pause();
musicBtn.innerHTML="🌷 For My Jaan";
}

});
babyBtn.addEventListener("click", () => {

if(babyMusic.paused){

music.pause();
music.currentTime = 0;
musicBtn.innerHTML = "🌷 For My Jaan";

babyMusic.play();

babyBtn.innerHTML = "🩷 Playing Baby";
musicBtn.innerHTML = "🌷 For My Jaan";

}else{

babyMusic.pause();

babyBtn.innerHTML = "🎀 For My Baby";

}






});
/* TEDDY */

let teddyCount = 0;

document.getElementById("teddy").addEventListener("click",()=>{

teddyCount++;

if(teddyCount < 10){

const teddyMsgs = [
"🧸 Emergency Hug Delivered",
"🌸 Dibbi detected",
"❤️ Sending warm wishes",
"🤗 One tiny hug added",
"✨ Happiness +10"
];

alert(
teddyMsgs[
Math.floor(Math.random()*teddyMsgs.length)
]
);

}else{

alert(`
🏆 Achievement Unlocked

World's Best Butterscotch Dibbi 🍫💛

Love Level: Infinite ❤️
`);

teddyCount = 0;
}

});

/* REMINDER POPUPS */

const popup = document.getElementById("popup");

const reminders = [

"💌 Tiny reminder: you're precious.",

"🌷 Hope your day is being kind to you.",

"🤗 A virtual hug has arrived.",

"✨ Take a deep breath. You've got this.",

"🍫 Butterscotch Dibbi deserves happiness.",

"🌸 Just a gentle reminder that you matter.",

"💖 Sending a little warmth your way."

];

function showReminder(){

popup.innerHTML =
reminders[
Math.floor(Math.random()*reminders.length)
];

popup.style.display="block";

setTimeout(()=>{
popup.style.display="none";
},5000);

}

/* First popup after 15 sec */

setTimeout(showReminder,15000);

/* Then every 3 min */

setInterval(showReminder,180000);
