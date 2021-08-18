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
let load = document.querySelector(`.spinner-border`)
let load_text = document.querySelector(`.load-text`)
function search () {
    let loader = setTimeout(ochil, 10000)
    manzil.style.opacity = `0`
    function ochil(){
        load.style.display = `none`
        manzil.style.opacity = `1`
        load_text.style.display = `none`
    }
    load.style.display = `block`
    load_text.style.display = `block`
    yukla()
    function yukla(){
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
    console.log(data.value[i].embedHtml)
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
    document.addEventListener('DOMContentLoaded', () => {
        
    })
}

let myinput = document.querySelector(`.myinput`)
let html =  document.querySelector(`html`)
let setjavobi = window.localStorage.getItem(`input2`)
console.log(setjavobi)

if(setjavobi == `true`){
    console.log(setjavobi + ` bu javob`)
    myinput.checked = true;
}else if(setjavobi == `false`) {
    console.log(setjavobi + ` bu javob`)
    myinput.checked = false
}

function chask (){
     if(myinput.checked  == true){
        html.classList.add(`dark`)
        window.localStorage.setItem(`input2`, `true`)
     }else if(myinput.checked  == false){
        window.localStorage.setItem(`input2`,  `false`)
         html.classList.remove(`dark`)
     }
}
chask()
let saee = setInterval(chask, 1000)