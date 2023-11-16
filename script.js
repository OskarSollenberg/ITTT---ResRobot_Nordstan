("use strict");

let url =
    "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=d8a53cbb-324f-4aa5-be0a-63c39f3895b6";

const busTime = document.querySelector("#time");
const busStop = document.querySelector("#stop");
const busDirection = document.querySelector("#direction");

let busTimes = [];
let busDirections = [];

async function fetchAndDisplayBus() {
    let res = await fetch(url);
    let data = await res.json();

    busTimes = [];
    busDirections = [];

    data.Departure.forEach((departure) => {
        if (
            departure.stop.includes("Nordstan") &&
            departure.name.includes("16")
        ) {
            busTimes.push(departure.time);
            busDirections.push(departure.direction);

            if (busDirections[0].includes("Bockkranen")) {
                busTime.textContent = `${busTimes[0]}`;
                busDirection.textContent = "BOCKKRANEN";

                ////
            } else if (busDirections[0].includes("Fyrktorget")) {
                busTime.textContent = `${busTimes[0]}`;
                busDirection.textContent = "FRYKTORGET";

                ////
            } else if (busDirections[0].includes("Marklandsgatan")) {
                busTime.textContent = `${busTimes[0]}`;
                busDirection.textContent = "MARKLANDSGATAN";

                ////
            } else if (busDirections[0].includes("Eriksbergstorget")) {
                busTime.textContent = `${busTimes[0]}`;
                busDirection.textContent = "ERIKSBERGSTORGET";
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

function driveBuss(busLeavesInMs) {
    console.log(busLeavesInMs);

    if (busLeavesInMs > 0) {
        bus.classList.add("bus--active");

        setTimeout(() => {
            if (busLeavesInMs < 120000) {
                bus.classList.add("bus--first--stop");

                if (busLeavesInMs < 100000) {
                    setTimeout(() => {
                        bus.classList.add("bus--turn--right");

                        setTimeout(() => {
                            bus.classList.add("bus--second--stop");

                            if (busLeavesInMs < 80000) {
                                setTimeout(() => {
                                    bus.classList.add("bus--turn--back");

                                    setTimeout(() => {
                                        bus.classList.add("bus--third--stop");

                                        if (busLeavesInMs < 60000) {
                                            setTimeout(() => {
                                                bus.classList.add(
                                                    "bus--turn--left"
                                                );

                                                setTimeout(() => {
                                                    bus.classList.add(
                                                        "bus--fourth--stop"
                                                    );

                                                    if (busLeavesInMs < 40000) {
                                                        setTimeout(() => {
                                                            bus.classList.add(
                                                                "bus--turn--left--again"
                                                            );

                                                            setTimeout(() => {
                                                                bus.classList.add(
                                                                    "bus--final--stop"
                                                                );

                                                                if (
                                                                    busLeavesInMs <
                                                                    20000
                                                                ) {
                                                                    setTimeout(
                                                                        () => {
                                                                            bus.classList.add(
                                                                                "bus--out"
                                                                            );

                                                                            setTimeout(
                                                                                () => {
                                                                                    bus.classList.remove(
                                                                                        ...bus.classList
                                                                                    );
                                                                                },
                                                                                "3000"
                                                                            );
                                                                        },
                                                                        "1000"
                                                                    );
                                                                }
                                                            }, "3000");
                                                        }, "3000");
                                                    }
                                                }, "3000");
                                            }, "3000");
                                        }
                                    }, "3000");
                                }, "3000");
                            }
                        }, "3000");
                    }, "3000");
                }
            }
        }, "3000");
    }
}
