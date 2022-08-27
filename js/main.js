let select = document.querySelector("#select-option");
let bread = document.querySelector(".bread");

//  CIRCLES

let breadSize = document.querySelector(".bread-size");
let sizeFirst = document.querySelector("#size-first");
let sizeSecond = document.querySelector("#size-second");
let sizeThird = document.querySelector("#size-third");

select.addEventListener("click", function (evt) {
  evt.preventDefault();

  bread.textContent = select.value;
});

// CIRCLES

sizeFirst.addEventListener("click", function (evt) {
  evt.preventDefault();

  breadSize.textContent = sizeFirst.value;
});

// SECOND CIRCLES

sizeSecond.addEventListener("click", function (evt) {
  evt.preventDefault();

  breadSize.textContent = sizeSecond.value;
});

// THIRD CIRCLES

sizeThird.addEventListener("click", function (evt) {
  evt.preventDefault();

  breadSize.textContent = sizeThird.value;
});

// ON TO

const productForm = document.querySelector(".product-on");
const button = document.querySelector("#product-btn");

// product

const inTom = document.querySelector("#tomato");
const inCuc = document.querySelector("#cucumber");
const inTurkey = document.querySelector("#turkey");
const inMush = document.querySelector("#mushroom");
const inOlive = document.querySelector("#olive");
const inGas = document.querySelector("#gas");

// textContent
const textProd = document.querySelector(".text");
const textProd2 = document.querySelector(".text2");
const textProd3 = document.querySelector(".text3");
const textProd4 = document.querySelector(".text4");
const textProd5 = document.querySelector(".text5");
const textProd6 = document.querySelector(".text6");

const elOl = document.querySelector(".product");

const arrays = [];

// TOMATO function

function tomatoAdd(e) {
  if (inTom.checked) {
    textProd.textContent = e;
  } else {
    textProd.textContent = " ";
  }
}

// CUCUMBER function

function cucumberAdd(e) {
  if (inCuc.checked) {
    textProd2.textContent = e;
  } else {
    textProd2.textContent = " ";
  }
}

// TURKEY function

function turkeyAdd(e) {
  if (inTurkey.checked) {
    textProd3.textContent = e;
  } else {
    textProd3.textContent = " ";
  }
}

// MUSHROOM function

function mushroomAdd(e) {
  if (inMush.checked) {
    textProd4.textContent = e;
  } else {
    textProd4.textContent = " ";
  }
}

// OLIVE function

function oliveAdd(e) {
  if (inOlive.checked) {
    textProd5.textContent = e;
  } else {
    textProd5.textContent = " ";
  }
}

// GAS function

function gasAdd(e) {
  if (inGas.checked) {
    textProd6.textContent = e;
  } else {
    textProd6.textContent = " ";
  }
}

// ADDITION FUNCTIONS

const inBit = document.querySelector("#bitter");
const inSau = document.querySelector("#sausage");
const textBit = document.querySelector(".textBit");
const textSau = document.querySelector(".textSau");

function bitterAdd(e) {
  if (inBit.checked) {
    textBit.textContent = e;
  } else {
    textBit.textContent = " ";
  }
}

function sausageAdd(e) {
  if (inSau.checked) {
    textSau.textContent = e;
  } else {
    textSau.textContent = " ";
  }
}
