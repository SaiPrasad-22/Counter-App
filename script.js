// Counter using DOM

let counter = 0;
let count = document.querySelector(".counter h1");
let error = document.querySelector("#error");

function increase() {
  counter = counter + 1;
  count.innerText = counter;
  error.style.display = "none";
}

function reset() {
  counter = 0;
  count.innerText = counter;
  error.style.display = "none";
}

function decrease() {
  if (counter > 0) {
    counter = counter - 1;
    count.innerText = counter;
    error.style.display = "none";
  } else if (counter >= 0) {
    error.style.display = "block";
    error.innerText = "Can't Decrease Below 0!";
    error.style.color = "red";
  }
}
