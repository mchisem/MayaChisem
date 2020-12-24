// Variables
var modal = document.getElementById("back");
var closeImg = document.querySelector("#close");
var modalImg = document.querySelector(".modal-content");
var content = document.querySelector("#content");

// Event delegation for images
const parent = document.querySelector(".card-columns");

parent.addEventListener("click", event => {
  if(event.target.className === "card-img-top") {
  console.log(event.target)
  modal.style.display = "block";

  //if you console.log(this) -> returns the whole window object which has no src value
  //using event.target can make us target exactly what we need
  modalImg.src = event.target.src;
  content.classList.remove("hide");
  closeImg.classList.remove("hide");
  }
  })

// When the user clicks on (x), closes the modal
closeImg.onclick = function() {
  modal.style.display = "none";
  content.classList.add("hide");
}