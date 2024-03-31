const plus_icon = document.querySelector(".plus-icon1");
const minus_icon = document.querySelector(".minus-icon1");
const second_sec = document.querySelector(".second-sec");
const answer_1 = document.querySelector(".a1");
const third_sec = document.querySelector(".third-sec");
const answer_2 = document.querySelector(".a2");
const plus_icon2 = document.querySelector(".plus-icon2");
const minus_icon2 = document.querySelector(".minus-icon2");
const fourth_sec = document.querySelector(".fourth-sec");
const plus_icon3 = document.querySelector(".plus-icon3");
const minus_icon3 = document.querySelector(".minus-icon3");
const answer_3 = document.querySelector(".a3");
const fifth_sec = document.querySelector(".fifth-sec");
const answer_4 = document.querySelector(".a4");
const plus_icon4 = document.querySelector(".plus-icon4");
const minus_icon4 = document.querySelector(".minus-icon4");
 
let turn0 = true;
plus_icon.classList.remove("hide");

second_sec.addEventListener("click", Show_a1);

function Show_a1() {
     if(turn0){
        answer_1.classList.remove("hide")
        minus_icon.classList.remove("hide")
        plus_icon.classList.add("hide")
        turn0 = false
     } else {
      answer_1.classList.add("hide");
      minus_icon.classList.add("hide")
      plus_icon.classList.remove("hide")
      turn0 = true
     }
}

plus_icon2.classList.remove("hide");

third_sec.addEventListener("click", show_a2);

function show_a2() {
   if (turn0){
      answer_2.classList.remove("hide")
      minus_icon2.classList.remove("hide")
      plus_icon2.classList.add("hide")
      turn0 = false
   }else {
      answer_2.classList.add("hide")
      minus_icon2.classList.add("hide")
      plus_icon2.classList.remove("hide")
      turn0 = true
   }
}

plus_icon3.classList.remove("hide");

fourth_sec.addEventListener("click", show_a3);

function show_a3() {
   if (turn0){
      answer_3.classList.remove("hide")
      minus_icon3.classList.remove("hide")
      plus_icon3.classList.add("hide")
      turn0 = false
   }else {
      answer_3.classList.add("hide")
      minus_icon3.classList.add("hide")
      plus_icon3.classList.remove("hide")
      turn0 = true
   }
}

plus_icon4.classList.remove("hide");

fifth_sec.addEventListener("click", show_a4);

function show_a4() {
   if (turn0){
      answer_4.classList.remove("hide")
      minus_icon4.classList.remove("hide")
      plus_icon4.classList.add("hide")
      turn0 = false
   }else {
      answer_4.classList.add("hide")
      minus_icon4.classList.add("hide")
      plus_icon4.classList.remove("hide")
      turn0 = true
   }
}
