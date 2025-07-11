 function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("loginError");
  const correctPassword = "iloveyou"; // Change as desired

  if (input === correctPassword) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainRoom").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Wrong password! Try again ❤️";
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

  if (name === "play") startEmojiGame();
}

function closePopup() {
  document.getElementById("roomPopup").classList.add("hidden");
}

// Move Avatar
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
});

// Floating Hearts
function spawnHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(),
