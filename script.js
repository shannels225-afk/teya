// =============================
// CHANGE YOUR PASSWORD HERE
// =============================

const correctPassword = "0407";


// =============================
// VAULT
// =============================

function unlock() {

    const pin = document.getElementById("pin");
    const message = document.getElementById("pinMessage");

    if (pin.value === correctPassword) {

    message.textContent = "Access granted... 💗";

    // Start background music
    const music = document.getElementById("bgMusic");

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Music playback was blocked.");
    });

    setTimeout(() => {
        document.getElementById("vaultPage").classList.remove("active");
        document.getElementById("questionPage").classList.add("active");
    }, 700);

    } else {

        message.textContent = "Hmm... wrong code  Try again.";
        alert("Wrong code! Try again 😭");
        pin.value = "";

    }
}


// =============================
// YES BUTTON — RUNS AWAY 😭
// =============================

const yesBtn = document.getElementById("yesBtn");

function moveYesButton() {

    const maxX = window.innerWidth - yesBtn.offsetWidth - 30;
    const maxY = window.innerHeight - yesBtn.offsetHeight - 30;

    const randomX = Math.max(20, Math.random() * maxX);
    const randomY = Math.max(20, Math.random() * maxY);

    yesBtn.style.position = "fixed";
    yesBtn.style.left = randomX + "px";
    yesBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("mouseenter", moveYesButton);

yesBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveYesButton();
});

yesBtn.addEventListener("click", function(e) {
    e.preventDefault();
    moveYesButton();
});


// =============================
// NO BUTTON
// =============================

function noClicked() {

    const message = document.getElementById("noMessage");
    const continueBtn = document.getElementById("continueBtn");

    message.innerHTML = `
        Are you sure? 🙁<br>
        <small>
        I think you might want to reconsider that answer...
        </small>
    `;

    yesBtn.style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    continueBtn.style.display = "inline-block";
}


// =============================
// FINAL PAGE
// =============================

function showFinal() {

    document.getElementById("questionPage").classList.remove("active");
    document.getElementById("finalPage").classList.add("active");

    document.body.style.overflow = "auto";
}


// =============================
// FLOATING HEARTS
// =============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["💗", "💕", "💖", "🌸", "♡"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 15) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);


// =============================
// NUMBER PAD
// =============================

function pressNum(num) {

    const pin = document.getElementById("pin");

    if (pin.value.length < 4) {
        pin.value += num;
    }
}

function clearPin() {
    document.getElementById("pin").value = "";
    document.getElementById("pinMessage").textContent = "";
}

function backspacePin() {
    const pin = document.getElementById("pin");
    pin.value = pin.value.slice(0, -1);
}