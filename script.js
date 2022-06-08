const FORM = document.querySelector("#search-form")
const gifsArea = document.querySelector("#GIFS")
const BTN = document.getElementsByClassName("btn")
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';
let q = "fate saber"
let limit = 9;
rating = "g";
lang = "en";
random_id = "mon";
// api.giphy.com/v1/gifs/search
// http://hostname/endpoint?param1=value1&param2=value2

let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}&rating=${rating}`;

async function getResults() {
    let response = await fetch(url);
    console.log("response:", response)

    let responseData = await response.json();
    console.log("object:", responseData)
    generateHTML(responseData)
}

function generateHTML(responseData){

    gifsArea.innerHTML = `<img src= "${responseData.data[0].images.original.url}" alt = "gif image"/>`;
    
}

getResults();

// console.log("index 1", object);



// async pokemonForm.addEventListener("submit", (evt) => {
//     // this prevents the page from re-loading
//     evt.preventDefault();
//     console.log("evt.target.pokemon.value = ", evt.target.pokemon.value);
//     let apiUrl = "https://pokeapi.co/api/v2/pokemon/" + evt.target.pokemon.value;
//     // all these console.log entries are kinda ugly - but facilitate debugging
//     console.log(apiUrl);
//     // (2) upon form submit, call the Pokemon API
//     //let response = fetch(apiUrl);
//     //console.log("response is: ", response); // a Promise is placeholder for future data
//     // async and await go together
//     // the next two lines with await ARE THE DEAL!!!
//     let response = await fetch(apiUrl);
//     console.log("response is: ", response); // now call is made, but data still not arrived
//     let responseData = await response.json();
//     console.log("responseData is: ", responseData); // now have actual data
//     // (3) grab what we want from results of the pokemon API call, and put it on page
//     generateHTML(responseData); 
// })