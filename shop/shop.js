let header = document.querySelector("header");
let Imag = document.querySelectorAll("header div.logo img");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (scrollY != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    header.style.color = "white";
    Imag[0].src = "../pictures/reusable-bottle (1).png";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    Imag[0].src = "../pictures/reusable-bottle.png";
    headerAnchor.forEach((a) => {
      a.style.color = "#09777d";
    });
  }
});
function goback() {
  window.location.href = "../index.html";
}

function gologin() {
  window.location.href = "../login/login.html";
}
