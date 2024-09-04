const countryName = document.getElementById('countrySearch');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
    let searchedCountry = countryName.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${searchedCountry}?fullText=true`
    fetch(finalUrl).then((response) => response.json()).then((data) => {
        let countryName = document.getElementById('countryName')
        countryName.innerHTML = `${data[0].name.common}`
        let regionName = document.getElementById('regionName')
        regionName.innerHTML = `${data[0].continents[0]}`
        let population = document.getElementById('population')
        population.innerHTML = `${data[0].population}`
        let currency = document.getElementById('currency');
        currency.innerHTML = `${data[0].currencies[Object.keys(data[0].currencies)].name}`
        let language = document.getElementById('language');
        language.innerHTML = `${Object.values(data[0].languages).toString().split(",").join(" , ")}`
    })
    .catch(() => {
        if (countryName.length == 0) {
            alert('Please enter a country name!')
        } else {
            alert('Please enter a valid country name!')
        }
    })
})