("use strict");

let url =
    "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=d8a53cbb-324f-4aa5-be0a-63c39f3895b6";

const busTime = document.querySelector("#time");
const busStop = document.querySelector("#stop");
const busName = document.querySelector("#name");

let busTimes = [];
let busStops = [];
let busNames = [];
let busDirections = [];

async function fetchAndDisplayBus() {
    let res = await fetch(url);
    let data = await res.json();

    busTimes = [];
    busStops = [];
    busNames = [];
    busDirections = [];

    data.Departure.forEach((departure) => {
        if (
            departure.stop.includes("Nordstan") &&
            departure.name.includes("16")
        ) {
            busTimes.push(departure.time);
            // console.log(busTimes)
            // busStops.push(departure.stop);
            // busNames.push(departure.name);
            busDirections.push(departure.direction);

            if (busDirections[0].includes("Bockkranen")) {
                busTime.textContent = `Bockkranen ${busTimes[0]}`;
                ////
            } else if (busDirections[0].includes("Fyrktorget")) {
                busTime.textContent = `Fyrktorget ${busTimes[0]}`;
            }
        }

        // busName.textContent = `${busNames[0]}`;
        // busStop.textContent = `${busStops[0]} ${busStops[1]} ${busStops[2]} ${busStops[3]} ${busStops[4]}`;
    });

    console.log(busTimes);
    setTimeout(function () {
        fetchAndDisplayBus();
    }, 10000);
}
fetchAndDisplayBus();
