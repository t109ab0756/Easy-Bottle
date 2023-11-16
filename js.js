let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (scrollY != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "#09777d";
    });
  }
});
//nav下拉特效
const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#thirteen");
const animation = document.querySelector("div.animation");

lastword.addEventListener("animationend", () => {
  animation.style =
    " transition : all 1.2s ease-in ; opacity: 0; pointer-events: none ";
});
//首頁特效

let button1 = document.querySelector("button.goshopbutton");
let button2 = document.querySelector("button.goaboutusbutton");
let main = document.querySelector("main");
let divtitle = document.querySelector("div.titleshop");

button1.addEventListener("click", function () {
  //點擊button後，會執行下面的code
  main.style =
    " transition : all 1s linear ; opacity: 0; pointer-events: none ";
  setTimeout(function () {
    window.location.href = "./shop/shop.html";
  }, 250);
});

button2.addEventListener("click", function () {
  //點擊button後，會執行下面的code
  main.style =
    " transition : all 0.5s ease-in ; opacity: 0; pointer-events: none ";
  divtitle.style =
    " transition : all 0.5s ease-in ; opacity: 0; pointer-events: none ";
  setTimeout(function () {
    window.location.href = "./關於我們/關於我們.html";
  }, 150);
});

//首頁兩個button setting
function goback() {
  window.location.href = "./index.html";
}
