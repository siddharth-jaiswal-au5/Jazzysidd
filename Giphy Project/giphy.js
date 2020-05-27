import axios from "axios"
import debounce from "debounce"

const searchform = document.querySelector("#searchform")
const searchInput = document.querySelector("#searchText")
const root = document.querySelector("#root")

const API_key = '0u4FwlhmMc0OZEWHOrSQ5LUvga4WyMC9'
const limitCount = 10
let OFFSET = 0
let searchText=""

const giphData = () =>{
    root.innerHTML=`<div class="loader">Loading...</div>`
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_key}&q=${searchText}&limit=${limitCount} &offset=${OFFSET}&rating=G&lang=en`
    axios.get(URL)
    .then((response)=>{
        root.innerHTML=""
        response.data.data.forEach((dataImage)=>{
            const div = document.createElement('div')
            div.classList.add('item')
            // data[0].images.original.url
            div.style.background=`url(${dataImage.images.original.url})no-repeat`
            root.appendChild(div)
        })
    }).catch((err)=>{
        console.log(err)
    })
}

const debouncegiphData = debounce(giphData,300)

searchform.addEventListener('submit',(e)=>{
   e.preventDefault()
})

searchInput.addEventListener("keyup",(e)=>{
    searchText=e.target.value
    debouncegiphData()
})

const button = document.querySelector('.btn-conatainer')
const nextBtn = button.querySelector('.next')
const previousBtn = button.querySelector('.previous')

nextBtn.addEventListener("click",()=>{
    OFFSET=OFFSET+limitCount
    giphData()
})

previousBtn.addEventListener("click",()=>{
    if(OFFSET>0){
        OFFSET=OFFSET-limitCount
        giphData()
    } 
})