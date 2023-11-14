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

async function fetchAndDisplayBus() {
    let res = await fetch(url);
    let data = await res.json();

    data.Departure.forEach((departure) => {
        if (departure.stop.includes("Nordstan")) {
            ////
            const busTime = document.querySelector("#time");
            const busStop = document.querySelector("#stop");
            const busName = document.querySelector("#name");

            let busTimes = [];
            let busStops = [];
            let busNames = [];

            busTimes.push(departure.time);
            busStops.push(departure.stop);
            busNames.push(departure.name);

            console.log(busTimes);

            busTime.textContent = busTimes[0];
            busStop.textContent = busStops[0];
            busName.textContent = busNames[0];

            const timeArr = departure.time.split(":");
            const h = timeArr[0];
            const m = timeArr[1];
            const s = timeArr[2];

            const busTimeMs = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;

            const now = new Date();
            const midnight = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate()
            );
            const currentTimeMs = now - midnight;

            const busLeavesInMs = busTimeMs - currentTimeMs;

            setTimeout(function () {
                fetchAndDisplayBus();
            }, busLeavesInMs);
        }
    });
}
fetchAndDisplayBus();

// setInterval(getData, 1000);
