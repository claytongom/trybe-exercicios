import Swal from 'sweetalert2';

const searchButton = document.querySelector(".search-btn");

const coinInput = document.querySelector("#coin-input")

const coinsList = document.querySelector(".coins")

function fetchAPI(coin){
    const url = `https://api.exchangerate.host/lates?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if (data.base !== coin.toUpperCase()){
            throw new Error('Moeda não existe!')
        }
        return data.rates;
    })
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
    console.log(coin)

    if(!coin){
        return Swal.fire({
            icon: 'error',
            title: 'Ops..',
            text: 'Você precisa digitar uma moeda'
        })
    }

    fetchAPI(coin)
    .then(renderCoins)
    .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "ops..",
            text: error.message
        })
    })
}

searchButton.addEventListener('click', handleSearch);