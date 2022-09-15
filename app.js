const openBtn = document.querySelector("#openModal")
const modal = document.querySelector("#modal")

const closeBtn = document.querySelector("#close")


const openModal = (evt) => {
    modal.style.display = "block";
}

const closeModal = (evt) => {
    modal.style.display = "none";
}

// Event Listeners
openBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)

setTimeout(openModal, 5000);