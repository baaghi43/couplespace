 function distance(a, b) {
  const ax = a.offsetLeft, ay = a.offsetTop;
  const bx = b.offsetLeft, by = b.offsetTop;
  return Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
}

function checkInteraction() {
  const daood = document.getElementById("daood");
  const saima = document.getElementById("saima");
  const popup = document.getElementById("roomPopup");
  if (distance(daood, saima) < 80) {
    document.getElementById("popupText").textContent = "💬 Daood & Saima bumped into each other!";
    popup.classList.remove("hidden");
  }
}

function enterRoom(name) {
  const popup = document.getElementById("roomPopup");
  const text = document.getElementById("popupText");

  const messages = {
    lounge: "Welcome to the 💬 Lounge Room! Chill and chat.",
    dream: "Welcome to the 📝 Dream Board! Plan your goals.",
    photo: "Welcome to the 📸 Memory Wall! Drop your sweetest memories.",
    kitchen: "🍳 Time to cook something romantic!",
    bedroom: "🛏️ Cozy space for bedtime stories and notes.",
    play: "🎮 Let’s play! Mini-games await.",
    washroom: "🚿 Just keeping it clean… and cute 💦",
    garden: "🌷 Peaceful garden to grow love moments."
  };

  text.textContent = messages[name] || "Welcome!";
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("roomPopup").classList.add("hidden");
}

// Move Daood’s Avatar with Arrow Keys
document.addEventListener("keydown", function(e) {
  const daood = document.getElementById("daood");
  const step = 10;
  let top = daood.offsetTop;
  let left = daood.offsetLeft;

  if (e.key === "ArrowUp") top -= step;
  if (e.key === "ArrowDown") top += step;
  if (e.key === "ArrowLeft") left -= step;
  if (e.key === "ArrowRight") left += step;

  daood.style.top = top + "px";
  daood.style.left = left + "px";

  checkInteraction();
});

// Floating Hearts Generator
function spawnHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(spawnHeart, 800);
function startEmojiGame() {
  const gameContainer = document.createElement("div");
  gameContainer.className = "emojiGame";
  document.body.appendChild(gameContainer);

  let score = 0;

  function spawnEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "fallingEmoji";
    emoji.textContent = ["💖", "😘", "💋", "😍", "🌹"][Math.floor(Math.random() * 5)];
    emoji.style.left = Math.random() * window.innerWidth + "px";
    gameContainer.appendChild(emoji);

    emoji.addEventListener("click", () => {
      score++;
      emoji.remove();
      if (score === 5) {
        alert("✨ Great job! You're spreading the love!");
      }
    });

    setTimeout(() => emoji.remove(), 5000);
  }

  for (let i = 0; i < 30; i++) {
    setTimeout(spawnEmoji, i * 600);
  }

  setTimeout(() => gameContainer.remove(), 20000);
}
