//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getData(event) {
    let city = document.getElementById("query").value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a12a0cc115d3dfcb6b620f1e61ad29a1`

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
        })
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
}