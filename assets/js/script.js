// navabr responsive
const clickNav = document.getElementById("clickNav");

function showMenu() {
  clickNav.style.right = "0";
}

function hideMenu() {
  clickNav.style.right = "-100%";
}

// jika pencet nav-links maka navbar resposnive style right -100%
var navLinks = document.querySelectorAll(".navbar_nav ul li a");
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    clickNav.style.right = "-100%";
  });
});

// jika mau close navbar wajib di button times
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".navbar_nav");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
    clickNav.style.right = "-100%";
  }
});

// copyright date sesuai tahunnya
const copyrightFooter = document.getElementById("date_copyright");
const year = new Date();
const fullYear = year.getFullYear();
copyrightFooter.textContent = fullYear;

// tab active education/skills
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

// scroll delay reveal javascript
const sr = ScrollReveal({
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(".navbar_nav", {delay: 140, origin: "top"});
sr.reveal(".hero .content", {delay: 190, origin: "left"});
sr.reveal(".social-media", {delay: 100, origin: "bottom"});
// sr.reveal(".heading", {delay: 100, origin: "left"});
// sr.reveal(".about", {delay: 300, origin: "top"});
// sr.reveal(".about-me-educ-skills", {delay: 300, origin: "top"});
// sr.reveal(".box-p-1", {delay: 250, origin: "top"});
// sr.reveal(".box-p-2", {delay: 300, origin: "top"});
// sr.reveal(".box-p-3", {delay: 350, origin: "top"});
// sr.reveal(".box-p-4", {delay: 250, origin: "top"});
// sr.reveal(".box-p-5", {delay: 300, origin: "top"});
// sr.reveal(".box-p-6", {delay: 350, origin: "top"});
// sr.reveal(".box-p-7", {delay: 250, origin: "top"});
// sr.reveal(".box-p-8", {delay: 300, origin: "top"});
// sr.reveal(".box-p-9", {delay: 350, origin: "top"});
// sr.reveal(".box-p-10", {delay: 250, origin: "top"});
// sr.reveal(".box-p-11", {delay: 300, origin: "top"});
