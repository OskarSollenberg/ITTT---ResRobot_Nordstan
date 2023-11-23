("use strict");

const stations = document.querySelectorAll(".station");
const bus = document.querySelector("#bus");

let tl = gsap.timeline({ repeat: 1 });

for (let station of stations) {
    const { x, y } = station.getBoundingClientRect();
    const rotation = station.dataset.rotate;

    tl.to("#bus", { x: x, y: y, duration: 1 });
    tl.to("#bus", { rotate: rotation, duration: 1 });
}

// Hur funkar det när man deklarerar varibler som med x & y?
// Vad blir skillnaden på att använda style ist för dataset i denna bemärkelse? 
// Måste man utgå ifrån top: 0; och left: 0; ?

// Hur gör man den responsiv oavsett hur stor den är? 
// ska man använda grid?

// let url =
//     "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=84c3c896-2e69-454c-b8af-f585ae31dd28";

// fetchAndDisplayBus();
// async function fetchAndDisplayBus() {
//     let res = await fetch(url);
//     let data = await res.json();

//     let departures = data.Departure;

//     for (let departure of departures) {
//         if (departure.name.includes("16")) {
//             console.log(departure);
//         }
//     }
// }

// let url =
//     "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=84c3c896-2e69-454c-b8af-f585ae31dd28";

// const busTime = document.querySelector("#time");
// const busStop = document.querySelector("#stop");
// const busDirection = document.querySelector("#direction");

// let busTimes = [];
// let busDirections = [];

// async function fetchAndDisplayBus() {
//     let res = await fetch(url);
//     let data = await res.json();

//     busTimes = [];
//     busDirections = [];

//     data.Departure.forEach((departure) => {
//         if (
//             departure.stop.includes("Nordstan") &&
//             departure.name.includes("16")
//         ) {
//             busTimes.push(departure.time);
//             busDirections.push(departure.direction);

//             if (busDirections[0].includes("Bockkranen")) {
//                 busTime.textContent = `${busTimes[0]}`;
//                 busDirection.textContent = "BOCKKRANEN";

//                 ////
//             } else if (busDirections[0].includes("Fyrktorget")) {
//                 busTime.textContent = `${busTimes[0]}`;
//                 busDirection.textContent = "FRYKTORGET";

//                 ////
//             } else if (busDirections[0].includes("Marklandsgatan")) {
//                 busTime.textContent = `${busTimes[0]}`;
//                 busDirection.textContent = "MARKLANDSGATAN";

//                 ////
//             } else if (busDirections[0].includes("Eriksbergstorget")) {
//                 busTime.textContent = `${busTimes[0]}`;
//                 busDirection.textContent = "ERIKSBERGSTORGET";
//             }
//         }
//     });

//     setTimeout(function () {
//         fetchAndDisplayBus();
//         calcTimeToNextBuss();
//     }, 1000);
// }
// fetchAndDisplayBus();

// function calcTimeToNextBuss() {
//     const timeArr = busTimes[0].split(":");
//     const h = timeArr[0];
//     const m = timeArr[1];
//     const s = timeArr[2];

//     const busTimeMs = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;

//     const now = new Date();
//     const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     const currentTimeMs = now - midnight;

//     const busLeavesInMs = busTimeMs - currentTimeMs;

//     driveBuss(busLeavesInMs);
// }

// let station1 = document.querySelector(".station--1");
// let station2 = document.querySelector(".station--2");
// let station3 = document.querySelector(".station--3");
// let station4 = document.querySelector(".station--4");
// let station5 = document.querySelector(".station--5");

// const bus = document.querySelector("#bus");

// function driveBuss(busLeavesInMs) {
//     console.log(busLeavesInMs);
//     busLeavesInMs = 100;

//     ////
//     if (busLeavesInMs > 1) {
//         bus.classList.add("bus--active");

//         setTimeout(() => {
//             if (busLeavesInMs < 400000) {
//                 bus.classList.add("bus--first--stop");

//                 if (busLeavesInMs < 250000) {
//                     setTimeout(() => {
//                         station1.classList.add("train-station--bg-red");
//                         bus.classList.add("bus--turn--right");

//                         setTimeout(() => {
//                             bus.classList.add("bus--second--stop");

//                             if (busLeavesInMs < 150000) {
//                                 setTimeout(() => {
//                                     station2.classList.add(
//                                         "train-station--bg-red"
//                                     );
//                                     bus.classList.add("bus--turn--back");

//                                     setTimeout(() => {
//                                         bus.classList.add("bus--third--stop");

//                                         if (busLeavesInMs < 10000) {
//                                             setTimeout(() => {
//                                                 station3.classList.add(
//                                                     "train-station--bg-red"
//                                                 );

//                                                 bus.classList.add(
//                                                     "bus--turn--left"
//                                                 );

//                                                 setTimeout(() => {
//                                                     bus.classList.add(
//                                                         "bus--fourth--stop"
//                                                     );

//                                                     if (busLeavesInMs < 50000) {
//                                                         setTimeout(() => {
//                                                             station4.classList.add(
//                                                                 "train-station--bg-red"
//                                                             );

//                                                             bus.classList.add(
//                                                                 "bus--turn--left--again"
//                                                             );

//                                                             setTimeout(() => {
//                                                                 bus.classList.add(
//                                                                     "bus--final--stop"
//                                                                 );

//                                                                 if (
//                                                                     busLeavesInMs <
//                                                                     30000
//                                                                 ) {
//                                                                     setTimeout(
//                                                                         () => {
//                                                                             station5.classList.add(
//                                                                                 "train-station--bg-red"
//                                                                             );
//                                                                             bus.classList.add(
//                                                                                 "bus--out"
//                                                                             );

//                                                                             setTimeout(
//                                                                                 () => {
//                                                                                     bus.classList.remove(
//                                                                                         ...bus.classList
//                                                                                     );
//                                                                                     station1.classList.remove(
//                                                                                         "train-station--bg-red"
//                                                                                     );
//                                                                                     station2.classList.remove(
//                                                                                         "train-station--bg-red"
//                                                                                     );
//                                                                                     station3.classList.remove(
//                                                                                         "train-station--bg-red"
//                                                                                     );
//                                                                                     station4.classList.remove(
//                                                                                         "train-station--bg-red"
//                                                                                     );
//                                                                                     station5.classList.remove(
//                                                                                         "train-station--bg-red"
//                                                                                     );
//                                                                                 },
//                                                                                 "3000"
//                                                                             );
//                                                                         },
//                                                                         "4000"
//                                                                     );
//                                                                 }
//                                                             }, "2500");
//                                                         }, "2500");
//                                                     }
//                                                 }, "2500");
//                                             }, "2500");
//                                         }
//                                     }, "2500");
//                                 }, "2500");
//                             }
//                         }, "2500");
//                     }, "2500");
//                 }
//             }
//         }, "1000");
//     } else {
//     }
// }
