const openModalBtn = document.querySelector(".open_modal")
const elModal = document.querySelector(".modal")


openModalBtn.addEventListener("click", () => {
    elModal.classList.add("active")
})
window.addEventListener("click", (e) => {
    if(e.target == elModal) {
        elModal.classList.remove("active")
    }
})