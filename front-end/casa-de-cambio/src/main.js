const searchButton = document.querySelector(".search-btn");

const coinInput = document.querySelector("#coin-input")

const coinsList = document.querySelector(".coins")

function fetchAPI(coin){
    const url = `https://api.exchangerate.host/lates?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data.rates)
}

function renderCoins(coins){
    coinsList.innerHTML = '';

    const coinsArray = Object.entries(coins)
    console.log(coinsArray)

    coinsArray.forEach((coin) => {
        const [coinName, value] = coin;
        const li = document.createElement('li');
        li.textContent = `${coinName} - ${value}`;
        coinsList.appendChild(li);
        
    })
}

function handleSearch(){
    const coin = coinInput.value;
    fetchAPI(coin)
    .then(renderCoins)
}

searchButton.addEventListener('click', handleSearch);