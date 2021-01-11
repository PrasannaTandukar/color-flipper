const colors = ["green", "yellow", "orange", "red", "#f4f4f4"];

document.getElementById("button-click").addEventListener("click", colorChanger);

function colorChanger() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.getElementById("code").textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
}
