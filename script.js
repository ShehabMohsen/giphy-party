const FORM = document.querySelector("#search-form")
const gifsArea = document.querySelector("#GIFS")
const BTN = document.querySelector("#submit-btn")
const SUBMISSION = document.querySelector("#gif-input")
const MORE_BTN = document.querySelector("#more-btn");
const HIDDEN = document.getElementsByClassName("hidden")

//INPUT your own API key:
const API_KEY = ''
let q = "fate saber"
let limit = 9;
let offset = 0;
let pages = 0; //also known as the number of times we load more gifs
rating = "g";

// api.giphy.com/v1/gifs/search
// http://hostname/endpoint?param1=value1&param2=value2


async function getResults(url) {
    let response = await fetch(url);
    console.log("response:", response)
    
    let responseData = await response.json();
    console.log("responseData:", responseData)
    generateHTML(responseData)
}

function generateHTML(responseData){
    gifsArea.innerHTML = ``;
    urlArray = responseData.data;
    urlArray.forEach(element => {
        gifsArea.innerHTML += `<img src= "${element.images.original.url}" alt = "gif image" width = 400 height = 400/>`;
        console.log(element.images.original.url);
    }); 
}

// function handleFormSubmit(){
//     console.log("hello")
//     q.preventDefault();
//     q = SUBMISSION.value
//     console.log(`search value: ${q}`)
//     let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}&rating=${rating}`;
//     getResults(url);
//     // let url = getUrl(q);
// }

BTN.addEventListener("click", (evt)=>{
    evt.preventDefault()
    console.log(`search value: ${SUBMISSION.value}`)
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${SUBMISSION.value}&limit=${limit}&rating=${rating}`;
    getResults(url);
    HIDDEN.display = "inline";
});

MORE_BTN.addEventListener("click", (evt)=>{
    pages +=1
    offset = pages * limit;
    evt.preventDefault()
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${SUBMISSION.value}&limit=${offset}&rating=${rating}`;
    getResults(url)
})




