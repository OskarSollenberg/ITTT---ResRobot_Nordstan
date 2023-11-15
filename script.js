("use strict");

let url =
    "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=d8a53cbb-324f-4aa5-be0a-63c39f3895b6";

// async function getData() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();

//         displayData(data);
//     } catch (error) {
//         console.error("Error fetching or parsing data:", error);
//     }
// }

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

            // console.log(departure);

            if (busDirections[0].includes("Bockkranen")) {
                busTime.textContent = `Bockkranen ${busTimes[0]}`;
                ////
            } else if (busDirections[0].includes("Fyrktorget")) {
                busTime.textContent = `Fyrktorget ${busTimes[0]}`;
            }
        }

        // busName.textContent = `${busNames[0]}`;
        // busStop.textContent = `${busStops[0]} ${busStops[1]} ${busStops[2]} ${busStops[3]} ${busStops[4]}`;

        // busStop.textContent = busStops[0];
        // busName.textContent = busNames[0];
    });
    delay();
}
fetchAndDisplayBus();

// setInterval(getData, 1000);

function delay() {
    const timeArr = busTimes[0].split(":");
    const h = timeArr[0];
    const m = timeArr[1];
    const s = timeArr[2];

    const busTimeMs = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;

    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const currentTimeMs = now - midnight;

    const busLeavesInMs = busTimeMs - currentTimeMs;

    console.log(busTimes[0]);
    console.log(busLeavesInMs);

    setTimeout(function () {
        fetchAndDisplayBus();
    }, busLeavesInMs - 5000);
}

// console.log(busTimes);
// console.log(busStops);
// console.log(busNames);
