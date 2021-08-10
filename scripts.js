const RisksBox = {
    toogleBox() {
        const effectButtons = document.querySelectorAll('.effects button')
        const effectText = document.querySelectorAll('.effects p')
        for (let i = 0; i < effectButtons.length; i++) {
            effectButtons[i].addEventListener("click", (e) => {
                effectText[i].classList.toggle('active')
            })
        }
    }
}

const Modal = {
    open() {
        const modalButton = document.querySelector('.openModalButton')
        const modal = document.getElementById('modal')
        modalButton.addEventListener("click", (e) => {
            modal.classList.add('active')
        })
    },

    close() {
        const modalButton = document.querySelector('.closeModalButton')
        const modal = document.getElementById('modal')
        modalButton.addEventListener("click", (e) => {
            modal.classList.remove('active')
        })
    }
}

RisksBox.toogleBox()
Modal.open()
Modal.close()