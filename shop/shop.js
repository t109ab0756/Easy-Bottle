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

function goback() {
  window.location.href = "../index.html";
}

function gologin() {
  window.location.href = "../login/login.html";
}
