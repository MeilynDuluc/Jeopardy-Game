const modal = document.querySelector("#modal")
const closeBtn = document.querySelector(".close-modal")

const modal = (evt) => {
  modal.style.display = "block";
}
const closeModal = (evt) => {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal)

setTimeout(modal, 5000);