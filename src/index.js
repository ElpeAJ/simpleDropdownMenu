let plusBtnIcon = `<img src="./images/plus.svg">`;

let minusBtnIcon = `<img src="./images/minus.svg">`;

function showPopUp(index, icon) {
  faq[index].classList.toggle("popup");

  // console.log(button[index].innerHTML == plusBtnIcon);
  // console.log(button[index].innerHTML);
  let close = document.querySelector("button");
  // let open;
  if (close === plusBtnIcon) {
    button[index].innerHTML = minusBtnIcon;
    // close = "";
  } else if (close !== plusBtnIcon) {
    button[index].innerHTML = plusBtnIcon;
    // open = "";
  }
  console.log(button[index].innerHTML);
}

let button = document.querySelectorAll("button");
const faq = document.querySelectorAll(".faq");

// const globe = [0, 3, 5, 6];

// console.log(plusBtnIcon);

for (let buttonIndex = 0; buttonIndex < button.length; buttonIndex++) {
  button[buttonIndex].innerHTML = plusBtnIcon;

  // let buttonIndex = 0;
  button[buttonIndex].addEventListener("click", () => {
    showPopUp(buttonIndex);
  });
}

// let button = document.querySelectorAll(".button");
// const faq = document.querySelectorAll(".faq");

// function showPopUp(array) {
//   faq.forEach((array) => {
//     array[faq].classList.toggle("popup");
//   });
// }
// console.log(button);
// button.forEach((array) => {
//   array.addEventListener("click", showPopUp);
// });

// let button = document.querySelectorAll(".button");
// const faq = document.querySelectorAll(".faq");

// function showPopUp(array) {
//   console.log(button[array]);

//   //   faq.forEach((array) => {
//   //     array[faq].classList.toggle("popup");
//   //   });
// }
// console.log(button);
// button.forEach((array) => {
//   array.addEventListener("click", () => {
//     showPopUp(array);
//   });
// });
// let button = document.querySelectorAll("button");
// const faq = document.querySelectorAll(".faq");

// function showPopUp(index) {
//   faq[index].classList.toggle("popup");
// }

// const globe = [0, 3, 5, 6];

// console.log(typeof button);

// for (let i = 0; i < button.length; i++) {
//   let index = i;
//   button[i].addEventListener("click", () => {
//     showPopUp(index);
//   });
// }
