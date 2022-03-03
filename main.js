let section = document.getElementById("our-skills");
let spans = document.querySelectorAll(".the-progress span");
let down = document.querySelector(".down");
let body = document.querySelector("body");

window.onscroll = function () {
  if (
    window.scrollY >= section.offsetTop ||
    window.scrollY >= section2.offsetTop
  ) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    });
  }
  if (window.scrollY >= 700) {
    down.style.display = "block";
  } else {
    down.style.display = "none";
  }
};
//
let other = document.getElementById("other");
let meg = document.querySelector(".mega-menu");
let started = false;
other.onclick = function () {
  meg.classList.toggle("toggle");
};
//
let nums = document.querySelectorAll(".stats .number");
let section2 = document.querySelector(".stats");

function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 5000 / goal);
}
//
let countDate = new Date("Dec 31 , 2022  23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//

down.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
//
let detal = document.querySelectorAll(".details");
let detalarray = Array.from(detal);
let divs = document.querySelectorAll(".info a");
let divsarray = Array.from(divs);
// console.log(divs);

//
// divsarray.forEach((ele) => {
//   ele.addEventListener("click", function (e) {
//     // console.log(ele);
//     // detalarray.style.display = "block";
//     divsarray.forEach((div) => {
//       div.style.display = "none";
//     });
//     document.querySelector(e.currentTarget.dataset.cout).style.display =
//       "block";
//   });
// });

//
