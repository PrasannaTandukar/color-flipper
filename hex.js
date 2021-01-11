const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.getElementById("button-click").addEventListener("click", colorChanger);

function colorChanger() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomValue = Math.floor(Math.random() * hexCodes.length);
    color += hexCodes[randomValue];
  }
  document.getElementById("code").textContent = color;
  document.body.style.backgroundColor = color;
}
