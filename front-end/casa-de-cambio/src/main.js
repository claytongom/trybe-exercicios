const searchButton = document.querySelector(".search-btn");

function fetchAPI(coin){
    const url = `https://api.exchangerate.host/lates?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))

}

function handleSearch(){
    console.log("clicou");
}

searchButton.addEventListener('click', () => fetchAPI('USD'));