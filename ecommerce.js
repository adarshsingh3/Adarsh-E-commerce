// About javascript

let n1 = 4800;
let n2 = 0;
let n3 = 0;
function cnt1() {
  n1++;
  let x = document.querySelector(".count1");
  if (x !== null) x.innerHTML = n1;
  if (n1 == 5000) {
    clearInterval(count1_);
  }
}
function cnt2() {
  n2 = n2 + 5;
  let x = document.querySelector(".count2");
  if (x !== null) x.innerHTML = n2;
  if (n2 == 800) {
    clearInterval(count2_);
  }
}
function cnt3() {
  n3++;
  let x = document.querySelector(".count3");
  if (x !== null) x.innerHTML = n3;
  if (n3 == 40) {
    clearInterval(count3_);
  }
}
let count1_ = setInterval(cnt1, 4);
let count2_ = setInterval(cnt2, 5);
let count3_ = setInterval(cnt3, 30);

/* contact contact contact contact contact contact contact contact contact contact contact contact*/

const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".icon");
  const answer = accordian.querySelector(".answer");
  accordian.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

