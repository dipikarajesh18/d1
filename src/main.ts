import "./style.css";

const mainButton = document.createElement("button");

mainButton.innerHTML = "🍪";
mainButton.classList.add("icon");
document.body.append(mainButton);

const counterDiv = document.createElement("div");
counterDiv.innerHTML = "No clicks yet. Click the Big Cookie to get more.";
document.body.append(counterDiv);

let counter = 0;

mainButton.addEventListener("click", (_) => {
  counter += 1;
  counterDiv.innerHTML = counter.toString();
});
