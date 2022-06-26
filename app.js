const switchBtn = document.querySelector(".switch-container");
const roll = document.querySelector(".switch");
const count = document.querySelector(".view-count");
const range = document.querySelector(".slider");
const price = document.querySelector(".price");

switchBtn.addEventListener("click", function () {
  switchBtn.style.transition = "all 1s";
  if (roll.classList.contains("switch-right")) {
    roll.classList.remove("switch-right");
    roll.classList.add("switch-left");
    switchBtn.style.backgroundColor = "hsl(223, 50%, 87%";
    switchLeft();
  } else {
    roll.classList.add("switch-right");
    roll.classList.remove("switch-left");
    switchBtn.style.backgroundColor = "hsl(174, 86%, 45%)";
    switchRight();
  }
});
const boom = 10;
console.log(boom);

range.addEventListener("input", function () {
  count.innerHTML = range.value + "K";
  if (!roll.classList.contains("switch-right")) {
    switchLeft();
  } else {
    switchRight();
  }
});
function switchLeft() {
  if (range.value <= 25) {
    price.innerHTML = `$ ${boom + 2}.00`;
  } else if (range.value <= 50) {
    price.innerHTML = `$ ${boom}.00`;
  } else if (range.value <= 75) {
    price.innerHTML = `$ ${boom + -2}.00`;
  } else {
    price.innerHTML = `$ ${boom + -4}.00`;
  }
}
function switchRight() {
  if (range.value <= 25) {
    price.innerHTML = `$ ${boom}.00`;
  } else if (range.value <= 50) {
    price.innerHTML = `$ ${boom - 1}.00`;
  } else if (range.value <= 75) {
    price.innerHTML = `$ ${boom - 3}.00`;
  } else {
    price.innerHTML = `$ ${boom - 5}.00`;
  }
}
// range.addEventListener("input", function () {
//   count.innerHTML = range.value + "K";
//   if (!roll.classList.contains("switch-right")) {
//     if (range.value <= 25) {
//       price.innerHTML = "$12.00";
//     } else if (range.value <= 50) {
//       price.innerHTML = "$10.00";
//     } else if (range.value <= 75) {
//       price.innerHTML = "$8.00";
//     } else {
//       price.innerHTML = "$5.00";
//     }
//   } else {
//     if (range.value <= 25) {
//       price.innerHTML = "$10.00";
//     } else if (range.value <= 50) {
//       price.innerHTML = "$8.00";
//     } else if (range.value <= 75) {
//       price.innerHTML = "$5.00";
//     } else {
//       price.innerHTML = "$3.50";
//     }
//   }
// });
