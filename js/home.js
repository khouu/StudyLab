let elements = new Object();
let elementIDS = [
  'arrow',
  'box',
  'math',
  'chemistry',
  'physics',
]
for (let id in elementIDS) {
  element = elementIDS[id]
  elements[element] = document.querySelector(`#${element}`)
}

//For Disappearing Navbar
window.addEventListener("scroll", () => {
  document.querySelectorAll("nav")[0].style.top = (window.pageYOffset >=700)? "0" : "-100px";
});

//For arrow scroll
function scrollPage() {
  let windowHeight = window.innerHeight;

  window.scrollTo({
    top: windowHeight + 62,
    behavior: "smooth"
  });
}

//this doesn't work but there's nothing wrong with it either(it works when I use go live in VSC)
function toCalcu(){
  console.log("check work");
  window.open("../htdocs/Q3KUribeAkhouPage2.html")
}