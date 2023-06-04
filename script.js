const express = require("express");
const cors = require("cors");

const app  = express();

app.use(
    cors({
        origin: "*"
    })
);
// const item1 = document.querySelector("#item1")
// const item2 = document.querySelector("#item2")
// const item3 = document.querySelector("#item3")
// const item4 = document.querySelector("#item4")
// const item5 = document.querySelector("#item5")
// const item6 = document.querySelector("#item6")
// const item7 = document.querySelector("#item7")
// const item8 = document.querySelector("#item8")
// const item9 = document.querySelector("#item9")
// const item10 = document.querySelector("#item10")
// const item11 = document.querySelector("#item11")
// const item12 = document.querySelector("#item12")
// const item13 = document.querySelector("#item13")
// const item14 = document.querySelector("#item14")
// const item15 = document.querySelector("#item15")
// const item16 = document.querySelector("#item16")
// const item17 = document.querySelector("#item17")
// const item18 = document.querySelector("#item18")
// const item19 = document.querySelector("#item19")
// const item20 = document.querySelector("#item20")
// const item21 = document.querySelector("#item21")
// const item22 = document.querySelector("#item22")

// const total = document.querySelector(".result")
// const clicks = {
//     c1: true,
//     c2: true,
//     c3: true,
//     c4: true,
//     c5: true,
//     c6: true,
//     c7: true,
//     c8: true,
//     c9: true,
//     c10: true,
//     c11: true,
//     c12: true,
//     c13: true,
//     c14: true,
//     c15: true,
//     c16: true,
//     c17: true,
//     c18: true,
//     c19: true,
//     c20: true,
//     c21: true,
//     c22: true
// }

// fetch(`https://ghibliapi.herokuapp.com/films`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         for (i = 0; i < data.length; i++) {
//             document.querySelector(`#item${i+1}`).src = data[i].image;
//         }

//         arr = [];
//         for (i = 0; i < data.length; i++) {
//             arr.push(Number(data[i].running_time))
//         }

//         totalMin = 0; 
//         total.innerText = totalMin;

//         const minutes = {
//             item1: () => {
//                 clicks.c1 ? totalMin += arr[0] : totalMin -= arr[0];
//                 if (!item1.style.border) {
//                     item1.style.border = "0.25rem red solid";
//                 } else {
//                     item1.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c1 = !clicks.c1;
//             },
//             item2: () => {
//                 clicks.c2 ? totalMin += arr[1] : totalMin -= arr[1];
//                 if (!item2.style.border) {
//                     item2.style.border = "0.25rem red solid";
//                 } else {
//                     item2.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c2 = !clicks.c2;
//             },
//             item3: () => {
//                 clicks.c3 ? totalMin += arr[2] : totalMin -= arr[2];
//                 if (!item3.style.border) {
//                     item3.style.border = "0.25rem red solid";
//                 } else {
//                     item3.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c3 = !clicks.c3;
//             },
//             item4: () => {
//                 clicks.c4 ? totalMin += arr[3] : totalMin -= arr[3];
//                 if (!item4.style.border) {
//                     item4.style.border = "0.25rem red solid";
//                 } else {
//                     item4.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c4 = !clicks.c4;
//             },
//             item5: () => {
//                 clicks.c5 ? totalMin += arr[4] : totalMin -= arr[4];
//                 if (!item5.style.border) {
//                     item5.style.border = "0.25rem red solid";
//                 } else {
//                     item5.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c5 = !clicks.c5;
//             },
//             item6: () => {
//                 clicks.c6 ? totalMin += arr[5] : totalMin -= arr[5];
//                 if (!item6.style.border) {
//                     item6.style.border = "0.25rem red solid";
//                 } else {
//                     item6.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c6 = !clicks.c6;
//             },
//             item7: () => {
//                 clicks.c7 ? totalMin += arr[6] : totalMin -= arr[6];
//                 if (!item7.style.border) {
//                     item7.style.border = "0.25rem red solid";
//                 } else {
//                     item7.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c7 = !clicks.c7;
//             },
//             item8: () => {
//                 clicks.c8 ? totalMin += arr[7] : totalMin -= arr[7];
//                 if (!item8.style.border) {
//                     item8.style.border = "0.25rem red solid";
//                 } else {
//                     item8.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c8 = !clicks.c8;
//             },
//             item9: () => {
//                 clicks.c9 ? totalMin += arr[8] : totalMin -= arr[8];
//                 if (!item9.style.border) {
//                     item9.style.border = "0.25rem red solid";
//                 } else {
//                     item9.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c9 = !clicks.c9;
//             },
//             item10: () => {
//                 clicks.c10 ? totalMin += arr[9] : totalMin -= arr[9];
//                 if (!item10.style.border) {
//                     item10.style.border = "0.25rem red solid";
//                 } else {
//                     item10.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c10 = !clicks.c10;
//             },
//             item11: () => {
//                 clicks.c11 ? totalMin += arr[10] : totalMin -= arr[10];
//                 if (!item11.style.border) {
//                     item11.style.border = "0.25rem red solid";
//                 } else {
//                     item11.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c11 = !clicks.c11;
//             },
//             item12: () => {
//                 clicks.c12 ? totalMin += arr[11] : totalMin -= arr[11];
//                 if (!item12.style.border) {
//                     item12.style.border = "0.25rem red solid";
//                 } else {
//                     item12.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c12 = !clicks.c12;
//             },
//             item13: () => {
//                 clicks.c13 ? totalMin += arr[12] : totalMin -= arr[12];
//                 if (!item13.style.border) {
//                     item13.style.border = "0.25rem red solid";
//                 } else {
//                     item13.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c13 = !clicks.c13;
//             },
//             item14: () => {
//                 clicks.c14 ? totalMin += arr[13] : totalMin -= arr[13];
//                 if (!item14.style.border) {
//                     item14.style.border = "0.25rem red solid";
//                 } else {
//                     item14.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c14 = !clicks.c14;
//             },
//             item15: () => {
//                 clicks.c15 ? totalMin += arr[14] : totalMin -= arr[14];
//                 if (!item15.style.border) {
//                     item15.style.border = "0.25rem red solid";
//                 } else {
//                     item15.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c15 = !clicks.c15;
//             },
//             item16: () => {
//                 clicks.c16 ? totalMin += arr[15] : totalMin -= arr[15];
//                 if (!item16.style.border) {
//                     item16.style.border = "0.25rem red solid";
//                 } else {
//                     item16.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c16 = !clicks.c16;
//             },
//             item17: () => {
//                 clicks.c17 ? totalMin += arr[16] : totalMin -= arr[16];
//                 if (!item17.style.border) {
//                     item17.style.border = "0.25rem red solid";
//                 } else {
//                     item17.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c17 = !clicks.c17;
//             },
//             item18: () => {
//                 clicks.c18 ? totalMin += arr[17] : totalMin -= arr[17];
//                 if (!item18.style.border) {
//                     item18.style.border = "0.25rem red solid";
//                 } else {
//                     item18.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c18 = !clicks.c18;
//             },
//             item19: () => {
//                 clicks.c19 ? totalMin += arr[18] : totalMin -= arr[18];
//                 if (!item19.style.border) {
//                     item19.style.border = "0.25rem red solid";
//                 } else {
//                     item19.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c19 = !clicks.c19;
//             },
//             item20: () => {
//                 clicks.c20 ? totalMin += arr[19] : totalMin -= arr[19];
//                 if (!item20.style.border) {
//                     item20.style.border = "0.25rem red solid";
//                 } else {
//                     item20.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c20 = !clicks.c20;
//             },
//             item21: () => {
//                 clicks.c21 ? totalMin += arr[20] : totalMin -= arr[20];
//                 if (!item21.style.border) {
//                     item21.style.border = "0.25rem red solid";
//                 } else {
//                     item21.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c21 = !clicks.c21;
//             },
//             item22: () => {
//                 clicks.c22 ? totalMin += arr[21] : totalMin -= arr[21];
//                 if (!item22.style.border) {
//                     item22.style.border = "0.25rem red solid";
//                 } else {
//                     item22.style.border = "";
//                 }
//                 total.innerText = totalMin;
//                 clicks.c22 = !clicks.c22;
//             }
//         }

//         if (totalMin != 0) {
//             const button = document.createElement("button")
//             button.textContent = "Convert Time"
//             document.querySelector("div").appendChild(button)
//         }

//         item1.addEventListener("click", minutes.item1)
//         item2.addEventListener("click", minutes.item2)
//         item3.addEventListener("click", minutes.item3)
//         item4.addEventListener("click", minutes.item4)
//         item5.addEventListener("click", minutes.item5)
//         item6.addEventListener("click", minutes.item6)
//         item7.addEventListener("click", minutes.item7)
//         item8.addEventListener("click", minutes.item8)
//         item9.addEventListener("click", minutes.item9)
//         item10.addEventListener("click", minutes.item10)
//         item11.addEventListener("click", minutes.item11)
//         item12.addEventListener("click", minutes.item12)
//         item13.addEventListener("click", minutes.item13)
//         item14.addEventListener("click", minutes.item14)
//         item15.addEventListener("click", minutes.item15)
//         item16.addEventListener("click", minutes.item16)
//         item17.addEventListener("click", minutes.item17)
//         item18.addEventListener("click", minutes.item18)
//         item19.addEventListener("click", minutes.item19)
//         item20.addEventListener("click", minutes.item20)
//         item21.addEventListener("click", minutes.item21)
//         item22.addEventListener("click", minutes.item22)

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

fetch("https://studio-ghibli-films-api.herokuapp.com/api/")
    .then(res => res.json())
    .then(data => {
        for (const movie in data) {
            if (data.hasOwnProperty(movie)) {
                const posterUrl = data[movie].poster;
                console.log(posterUrl);
            }
        }
    })