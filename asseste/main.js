const likeElement = document.querySelector(`.button-like`)
const dislikeElement = document.querySelector(`.button-disklike`)
likeElement.onclick = bajar
dislikeElement.onclick = bajar1
let x = 0

function bajar1() {
    if (x == 0) {
        dislikeElement.style.borderBottom = `5px solid blue`

        x = 1
    } else if (x == 1) {
        dislikeElement.style.borderBottom = `5px solid rgb(131, 129, 129)`
        x = 0
    }

}

function bajar() {
    if (x == 0) {
        likeElement.style.borderBottom = `5px solid blue`
        x = 1
    } else if (x == 1) {
        likeElement.style.borderBottom = `5px solid rgb(131, 129, 129)`
        x = 0
    }

}

// video
const inputElement = document.querySelector(`.input`)
const buttonpuskeElement = document.querySelector(`.button-1`)
const removevideo = document.querySelector(`.remove-video`)
const manzil = document.querySelector(`.box`)
buttonpuskeElement.onclick = kattaMenu

function kattaMenu() {
    removevideo.remove()
    let x = 0
    if (x == 0) {
        let Nevvideo = document.createElement(`box`)
        Nevvideo.innerHTML = inputElement.value
        inputElement.value = null
        manzil.prepend(Nevvideo)
        Newvideo.remove()
        x = 1
    } else if (x == 1) {
        let Newvideo = document.createElement(`box1`)
        Newvideo.innerHTML = inputElement.value
        inputElement.value = null
        manzil.prepend(Newvideo)
        Nevvideo.remove()
        x = 0
    }
}