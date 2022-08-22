//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getData(event) {
    let city = document.getElementById("query").value

    let url = `src="https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed"`

    fetch(url).then(function(res) {
            // console.log(res);
            return res.json();
            // let data = res.json()
        })
        .then(function(res) {
            console.log(res);
            append(res);
        }).catch(function(err) {
            console.log(err)
        });
}

function append(data) {
    let container = document.getElementById("container");
    container.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = data.name;

    let temp = document.createElement("p");
    temp.innerText = `Temp :- ${data.main.temp}`;

    let Min_temp = document.createElement("p");
    Min_temp.innerText = `Min Temp :- ${data.main.temp_min}`;


    let Max_temp = document.createElement("p");
    Max_temp.innerText = `Max Temp :- ${data.main.temp_max}`;

    container.append(h2, temp, Min_temp, Max_temp);

    let iframe = document.getElementById("gmap_canvas");
    iframe.src = url;
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(success);

    function success(pos) {
        const crd = pos.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
}

function getWeatherOnLocation(lat, long) {
    let url = ``
}


// How many data type in  js : - bigInt , symbol (explore);

//Explain differrent types of "Type Coercion" in JS.