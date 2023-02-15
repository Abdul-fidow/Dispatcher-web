let clickButton = document.querySelector(".mbtn");
let links = document.querySelector(".navBar");
clickButton.addEventListener("click", () => {
  links.classList.toggle("active")
})