 function distance(a, b) {
  const ax = a.offsetLeft, ay = a.offsetTop;
  const bx = b.offsetLeft, by = b.offsetTop;
  return Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
}

function checkInteraction() {
  const daood = document.getElementById("daood");
  const saima = document.getElementById("saima");
  const popup = document.getElementById("chatPopup");

  if (distance(daood, saima) < 80) {
    popup.classList.remove("hidden");
  }
}

function closePopup() {
  document.getElementById("chatPopup").classList.add("hidden");
}

// Move avatar with arrow keys
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
function enterRoom(name) {
  const popup = document.getElementById("roomPopup");
  const text = document.getElementById("popupText");

  switch (name) {
    case "lounge":
      text.textContent = "Welcome to the 💬 Lounge Room! Chat and relax.";
      break;
    case "dream":
      text.textContent = "Welcome to the 📝 Dream Board! Add couple goals.";
      break;
    case "photo":
      text.textContent = "Welcome to the 📸 Memory Wall! Upload your memories.";
      break;
  }

  popup.classList.remove("hidden");
}
case "kitchen":
  text.textContent = "🍳 Kitchen time! Cook up some memories together.";
  break;

case "bedroom":
  text.textContent = "🛏️ Bedroom vibes. Share cozy moments or sleepy notes.";
  break;

case "play":
  text.textContent = "🎮 Let's play! Games and giggles ahead.";
  break;

case "washroom":
  text.textContent = "🚿 Washroom surprise! Maybe a bubbly message? 😄";
  break;

case "garden":
  text.textContent = "🌷 Step into the Garden. A peaceful place to plant love.";
  break;

