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
const hato = document.querySelector(`.hatolik`)
const buttonKatta = document.querySelector(`.button-5`)
const qoshimcha = document.querySelector(`.videolar-royhati`)
const manzil2 = document.querySelector(`.qoshimcha-video`)
const data = []
const bilm = []
const sinov = []

buttonpuskeElement.addEventListener(`click`, video6 => {
    removevideo.remove()
    hato.style.margin = `5px`
    if (data.indexOf(inputElement.value) == -1) {
        let Nevvideo = document.createElement(`box`)
        Nevvideo.innerHTML = inputElement.value
        manzil.prepend(Nevvideo)
        data.push(inputElement.value)
        Nevvideo.style.zIndex = `1` + 1
    } else {
        alert(`eror`)
    }
})
buttonpuskeElement.addEventListener(`click`, qoshimcha23 => {

    if (bilm.indexOf(inputElement.value) == -1) {
        const Newvideo2 = document.createElement(`box1`)
        Newvideo2.innerHTML = inputElement.value
        qoshimcha.prepend(Newvideo2)
        bilm.push(inputElement.value)
    } else {

    }
})
buttonpuskeElement.addEventListener(`click`, ohiri => {
        if (sinov.indexOf(inputElement.value) == -1) {
            const Newvideo3 = document.createElement(`box2`)
            Newvideo3.innerHTML = inputElement.value
            manzil2.appendChild(Newvideo3)
            sinov.push(inputElement.value)
        } else {

        }
    })
    // function kattaMenu() {
    //     removevideo.remove()
    //     const Nevvideo = document.createElement(`box`)
    //     Nevvideo.innerHTML = inputElement.value
    //     inputElement.value = null
    //     manzil.prepend(Nevvideo)
    // }

// function kichikmenu() {
//     const Newvideo2 = document.createElement(`box1`)
//     Newvideo2.innerHTML = inputElement.value
//     inputElement.value = null
//     qoshimcha.prepend(Newvideo2)
// }