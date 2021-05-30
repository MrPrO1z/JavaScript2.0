fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=551c24c034087ae066a9ab5f728284ea')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = 'Температура ' +
        Math.round(data.main.temp - 273) + '&#176;';
        document.querySelector('.feels_like').innerHTML = 'Чувствуется как ' +
        Math.round(data.main.feels_like - 273) + '&#176;';
        document.querySelector('.disclaimer')
        .innerHTML = 'Облачность ' + data.weather[0]['description'];
        document.querySelector('.humidity').textContent = 'Влажность ' + data.main['humidity'] + ' %';
        // http://openweathermap.org/img/wn/10d@2x.png
        document.querySelector('.features')
        .innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    })
    .catch(function () {
        // catch any errors
    });