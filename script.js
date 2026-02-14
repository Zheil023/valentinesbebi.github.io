function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "102822") { // CHANGE THIS
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
    } else {
        alert("Wrong password, Bebi 😢");
    }
}

function openLetter() {
    document.getElementById("letter").classList.remove("hidden");
}

function celebrate() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.background = `hsl(${Math.random()*360},100%,70%)`;
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh) rotate(360deg); }
}
`;
document.head.appendChild(style);

/* Floating Hearts */
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 5s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 500);

const floatStyle = document.createElement("style");
floatStyle.innerHTML = `
@keyframes floatUp {
    to { transform: translateY(-120vh); opacity: 0; }
}
`;
document.head.appendChild(floatStyle);
