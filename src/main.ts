import "./style.css";

// Create UI elements

const mainButton = document.createElement("button");

mainButton.innerHTML = "🍪";
mainButton.classList.add("icon");
document.body.append(mainButton);

const upgradeButton = document.createElement("button");

upgradeButton.innerHTML = "Upgrade";
upgradeButton.disabled = true;
upgradeButton.classList.add("icon");
document.body.append(upgradeButton);

const counterDiv = document.createElement("div");
counterDiv.innerHTML = "No clicks yet. Click the Big Cookie to get more.";
document.body.append(counterDiv);

// Define main game state

let counter = 0; // number of cookies
let counterIncreaseRate = 0; // cookies per second

// Define main game logic

function updateCookies(increase: number) {
  counter += increase;
  counterDiv.innerHTML = `${counter.toFixed(1)} cookies`;

  // todo: change the disabled stutus of the upgrade button based on if they can afford it or not
  upgradeButton.disabled = counter < 10;
}

mainButton.addEventListener("click", (_) => {
  updateCookies(1);
});

let lastTickTime = Date.now();
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

upgradeButton.addEventListener("click", (_) => {
  updateCookies(-10);
  counterIncreaseRate += 1;
});
