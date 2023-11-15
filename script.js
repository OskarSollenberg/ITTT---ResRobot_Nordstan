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
            // busStops.push(departure.stop);
            busNames.push(departure.name);
            busDirections.push(departure.direction);

            if (busDirections[0].includes("Bockkranen")) {
                busTime.textContent = `Bockkranen ${busTimes[0]}`;
                ////
            } else if (busDirections[0].includes("Fyrktorget")) {
                busTime.textContent = `Fyrktorget ${busTimes[0]}`;
                ////
            } else if (busDirections[0].includes("Marklandsgatan")) {
                busTime.textContent = `Marklandsgatan ${busTimes[0]}`;
                ////
            } else if (busDirections[0].includes("Eriksbergstorget")) {
                busTime.textContent = `Eriksbergstorget ${busTimes[0]}`;
            }
        }

        // busName.textContent = `${busNames[0]}`;
        // busStop.textContent = `${busStops[0]} ${busStops[1]} ${busStops[2]} ${busStops[3]} ${busStops[4]}`;
    });
    // console.log(busTimes);
    // console.log(busDirections);
    // console.log(busNames);

    setTimeout(function () {
        fetchAndDisplayBus();
        calcTimeToNextBuss();
    }, 1000);
}
fetchAndDisplayBus();

function calcTimeToNextBuss() {
    const timeArr = busTimes[0].split(":");
    const h = timeArr[0];
    const m = timeArr[1];
    const s = timeArr[2];

    const busTimeMs = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;

    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const currentTimeMs = now - midnight;

    const busLeavesInMs = busTimeMs - currentTimeMs;

    driveBuss(busLeavesInMs);

    // driveBuss(busLeavesInMs);

    // console.log(busLeavesInMs);
}

// function driveBuss(busLeavesInMs) {
// console.log(busLeavesInMs);

const bus = document.querySelector("#bus");
// const number = 0;

// if (number <= 0) {
// }

function driveBuss(busLeavesInMs) {
    console.log(busLeavesInMs);

    if (busLeavesInMs < 1) {
        bus.classList.remove(...bus.classList);
    }
    ////
    if (busLeavesInMs > 1) {
        bus.classList.add("bus");
        if (busLeavesInMs < 100000) {
            bus.classList.add("bus--first--stop");

            if (busLeavesInMs < 80000) {
                setTimeout(() => {
                    bus.classList.add("bus--second--stop");

                    if (busLeavesInMs < 50000) {
                        setTimeout(() => {
                            bus.classList.add("bus--third--stop");
                            // bus.classList.remove("bus--first--stop");

                            if (busLeavesInMs < 40000) {
                                setTimeout(() => {
                                    bus.classList.add("bus--fourth--stop");
                                    // bus.classList.remove("bus--second--stop");

                                    if (busLeavesInMs < 20000) {
                                        setTimeout(() => {
                                            bus.classList.add(
                                                "bus--fifth--stop"
                                            );
                                            // bus.classList.remove(
                                            //     "bus--third--stop"
                                            // );
                                        }, "3000");
                                    }
                                }, "3000");
                            }
                        }, "3000");
                    }
                }, "3000");
            }
        }
    }
}

// bus.style.transform = "rotateZ(90deg)";
// bus.style.transform = "rotateZ(90deg)";

// function secondStop() {
//     bus.style.left = "70%";
//     bus.style.transform = "rotateZ(90deg)";
// }

//     function driveToSecondStop() {
//         bus.classList.toggle("bus--second--stop");

//         setTimeout(() => {
//             bus.classList.remove("bus--turn--right");
//             setTimeout(() => {
//                 driveToSecondStop();
//             }, "2500");
//         }, "2500");
//     }
// }
