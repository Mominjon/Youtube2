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
let remove = document.querySelector(`.video-chiqish`)
let remove2 = document.querySelector(`.malumot-qism`)
let remove3  = document.querySelector(`.videolar-royhati`)
let button_search = document.querySelector(`.button-1`)
let input = document.querySelector(`.input`)
let manzil = document.querySelector(`.manzil`)
button_search.addEventListener(`click`, search)
function search () {
    remove.remove();
    remove2.remove();
    remove3.remove();
    fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?q=${input.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7cc114bb66mshed1b12c7c757e11p1ce9d5jsn862685503287",
		"x-rapidapi-host": "bing-video-search1.p.rapidapi.com"
	}
}).then(response => response.json())
.then(data => {
malumot = data;

let hato = []
for(var i = 0 ; i < data.value.length; i++){
    console.log(data.value[i])
    let div = document.createElement(`div`)
    let text = document.createElement(`p`)
    let newli = document.createElement(`li`)
    text.innerHTML = `${data.value[i].description}`
    newli.innerHTML = `${data.value[i].embedHtml}`
    text.classList.add(`text-video`)
    newli.classList.add(`video-video`)
    if(data.value[i].embedHtml == undefined ||data.value[i].description == undefined){
        hato.push(data.value[i].embedHtml)
        hato.push(data.value[i].description)
    }
    else{
        div.appendChild(newli)
        div.appendChild(text)
    }
    div.style.display = `flex`
    manzil.prepend(div)
}
})
}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;
const recoding11 = document.querySelector(`.nav-mikrafon`)
recognition.lang = "uz-UZ";
recoding11.addEventListener(`click`, () => {
    recognition.start();
})
recognition.onresult = (evt) => {
    let natija = evt.results[0][0].transcript;
    input.value = natija
    button_search.click();
    console.log(natija)
}
