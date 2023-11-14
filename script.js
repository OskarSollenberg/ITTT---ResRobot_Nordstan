////
////
////
////
("use strict");

function buildList(departures) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(departures));
    ul.appendChild(li);
}

let url =
    "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=d8a53cbb-324f-4aa5-be0a-63c39f3895b6";

async function getData() {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);

    let stop = [];
    let name = [];
    let times = [];

    data.Departure.forEach((depature) => {
        if (depature.stop.includes("Nordstan")) {
            ////
            ////
            times.push(depature.time);
            stop.push(depature.stop);
            name.push(depature.name);
        }
    });

    buildList(stop[0]);
    buildList(times[0]);
    buildList(name[0]);

    // console.log(times);
}
getData();
