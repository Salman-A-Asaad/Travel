// Set the variable
let nav = document.querySelector("nav");
let bar = document.getElementById("bar");
let list = document.getElementById("list");
let links = document.querySelectorAll("nav .container ul li a");
let home = document.getElementById("home");
let feature = document.getElementById("feature");
let about = document.getElementById("about");
let gallery = document.getElementById("gallery");
let review = document.getElementById("review");
let contact = document.getElementById("contact");
// Function to change the style of nav
function changeNav() {
  if (window.innerWidth > 768 && window.scrollY > 0) {
    nav.classList.add("streach");
  } else {
    nav.classList.remove("streach");
  }
}
// Function to show and hidde the list of links
function showList() {
  list.classList.toggle("show");
}
//Function to active link on list nav when i arrive to the section selecte
function changeLinkOfList() {
  if (window.scrollY >= home.offsetTop) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[0].classList.add("active");
  }
  if (window.scrollY >= feature.offsetTop - 100) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[1].classList.add("active");
  }
  if (window.scrollY >= about.offsetTop - 100) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[2].classList.add("active");
  }
  if (window.scrollY >= gallery.offsetTop - 100) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[3].classList.add("active");
  }
  if (window.scrollY >= review.offsetTop - 150) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[4].classList.add("active");
  }
  if (window.scrollY >= contact.offsetTop - 100) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[5].classList.add("active");
  }
}
// Add function changeNav changeLinkOfList to window when scroll , add function showList to bar when click
window.addEventListener("scroll", changeNav);
window.addEventListener("scroll", changeLinkOfList);
bar.addEventListener("click", showList);
