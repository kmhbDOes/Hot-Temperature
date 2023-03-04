const API_KEY = `8a8e33bf92180435fcce538c63919543`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        .catch(error => console.log(error));

}


const displayTemperature = data => {

    if (!data || !data.main || !data.weather) {
        // Handle error: data is not in the expected format
        return;
    }

    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    setInnerTextById('wind-deg', data.wind.deg)
    setInnerTextById('wind-speed', data.wind.speed)
    console.log(data);
    console.log(data.weather[0].main);
    console.log(data.wind.deg);
    console.log(data.wind.speed);
    setImgIcon(data.weather[0].icon);

}


const setInnerTextById = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
}

const setImgIcon = (iconCode) => {
    const iconElement = document.getElementById('weather-icon');
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    iconElement.setAttribute('src', iconUrl);
}





document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    // set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');
setImgIcon();
