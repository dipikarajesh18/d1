import "./style.css";

const mainButton = document.createElement("button");

mainButton.innerHTML = "🍪";
mainButton.classList.add("icon");
document.body.append(mainButton);

let counter = 0; // number of cookies
const counterIncreaseRate = 1; // cookies per second

function updateCookies(increase: number) {
  counter += counterIncreaseRate * increase;
  counterDiv.innerHTML = `${counter.toFixed(1)} cookies`;
}

const counterDiv = document.createElement("div");
counterDiv.innerHTML = "No clicks yet. Click the Big Cookie to get more.";
document.body.append(counterDiv);

mainButton.addEventListener("click", (_) => {
  updateCookies(1);
});

let lastTickTime = 0;
function tick() {
  const now = Date.now();
  console.log(`old: ${lastTickTime}`);
  console.log(`now: ${now}`);
  const delta = (now - lastTickTime) / 1000;
  lastTickTime = now;

  updateCookies(counterIncreaseRate * delta);
  requestAnimationFrame(tick); // temporal recursion
}

requestAnimationFrame(tick);
