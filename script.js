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
