const searchButton = document.querySelector(".search-btn");

const coinInput = document.querySelector("#coin-input")

function fetchAPI(coin){
    const url = `https://api.exchangerate.host/lates?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data.rates)

}

function handleSearch(){
    const coin = coinInput.value;
    fetchAPI(coin)
    .then(console.log)
}

searchButton.addEventListener('click', handleSearch);