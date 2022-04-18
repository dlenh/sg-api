const total = document.querySelector(".result")
const clicks = {
    c1: true,
    c2: true,
    c3: true,
    c4: true,
    c5: true,
    c6: true,
    c7: true,
    c8: true,
    c9: true,
    c10: true,
    c11: true,
    c12: true,
    c13: true,
    c14: true,
    c15: true,
    c16: true,
    c17: true,
    c18: true,
    c19: true,
    c20: true,
    c21: true,
    c22: true
}

fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // document.querySelector("#castle").src = data[0].image
        // document.querySelector("#fireflies").src = data[1].image
        // data.forEach(x => {
        //     const li = document.createElement("li")
        //     li.innerText = x.title
        //     document.querySelector("ul").appendChild(li)
        // })
        for (i = 0; i < data.length; i++) {
            document.querySelector(`#item${i+1}`).src = data[i].image;
        }

        arr = [];
        for (i = 0; i < data.length; i++) {
            arr.push(Number(data[i].running_time))
        }

        totalMin = 0; 

        const minutes = {
            item1: () => {
                clicks.c1 ? totalMin += arr[0] : totalMin -= arr[0];
                total.innerText = totalMin;
                clicks.c1 = !clicks.c1;
            },
            item2: () => {
                clicks.c2 ? totalMin += arr[1] : totalMin -= arr[1];
                total.innerText = totalMin;
                clicks.c2 = !clicks.c2;
            },
            item3: () => {
                clicks.c3 ? totalMin += arr[2] : totalMin -= arr[2];
                total.innerText = totalMin;
                clicks.c3 = !clicks.c3;
            },
            item4: () => {
                clicks.c4 ? totalMin += arr[3] : totalMin -= arr[3];
                total.innerText = totalMin;
                clicks.c4 = !clicks.c4;
            },
            item5: () => {
                clicks.c5 ? totalMin += arr[4] : totalMin -= arr[4];
                total.innerText = totalMin;
                clicks.c5 = !clicks.c5;
            },
            item6: () => {
                clicks.c6 ? totalMin += arr[5] : totalMin -= arr[5];
                total.innerText = totalMin;
                clicks.c6 = !clicks.c6;
            },
            item7: () => {
                clicks.c7 ? totalMin += arr[6] : totalMin -= arr[6];
                total.innerText = totalMin;
                clicks.c7 = !clicks.c7;
            },
            item8: () => {
                clicks.c8 ? totalMin += arr[7] : totalMin -= arr[7];
                total.innerText = totalMin;
                clicks.c8 = !clicks.c8;
            },
            item9: () => {
                clicks.c9 ? totalMin += arr[8] : totalMin -= arr[8];
                total.innerText = totalMin;
                clicks.c9 = !clicks.c9;
            },
            item10: () => {
                clicks.c10 ? totalMin += arr[9] : totalMin -= arr[9];
                total.innerText = totalMin;
                clicks.c10 = !clicks.c10;
            },
            item11: () => {
                clicks.c11 ? totalMin += arr[10] : totalMin -= arr[10];
                total.innerText = totalMin;
                clicks.c11 = !clicks.c11;
            },
            item12: () => {
                clicks.c12 ? totalMin += arr[11] : totalMin -= arr[11];
                total.innerText = totalMin;
                clicks.c12 = !clicks.c12;
            },
            item13: () => {
                clicks.c13 ? totalMin += arr[12] : totalMin -= arr[12];
                total.innerText = totalMin;
                clicks.c13 = !clicks.c13;
            },
            item14: () => {
                clicks.c14 ? totalMin += arr[13] : totalMin -= arr[13];
                total.innerText = totalMin;
                clicks.c14 = !clicks.c14;
            },
            item15: () => {
                clicks.c15 ? totalMin += arr[14] : totalMin -= arr[14];
                total.innerText = totalMin;
                clicks.c15 = !clicks.c15;
            },
            item16: () => {
                clicks.c16 ? totalMin += arr[15] : totalMin -= arr[15];
                total.innerText = totalMin;
                clicks.c16 = !clicks.c16;
            },
            item17: () => {
                clicks.c17 ? totalMin += arr[16] : totalMin -= arr[16];
                total.innerText = totalMin;
                clicks.c17 = !clicks.c17;
            },
            item18: () => {
                clicks.c18 ? totalMin += arr[17] : totalMin -= arr[17];
                total.innerText = totalMin;
                clicks.c18 = !clicks.c18;
            },
            item19: () => {
                clicks.c19 ? totalMin += arr[18] : totalMin -= arr[18];
                total.innerText = totalMin;
                clicks.c19 = !clicks.c19;
            },
            item20: () => {
                clicks.c20 ? totalMin += arr[19] : totalMin -= arr[19];
                total.innerText = totalMin;
                clicks.c20 = !clicks.c20;
            },
            item21: () => {
                clicks.c21 ? totalMin += arr[20] : totalMin -= arr[20];
                total.innerText = totalMin;
                clicks.c21 = !clicks.c21;
            },
            item22: () => {
                clicks.c22 ? totalMin += arr[21] : totalMin -= arr[21];
                total.innerText = totalMin;
                clicks.c22 = !clicks.c22;
            }
        }

        document.querySelector("#item1").addEventListener("click", minutes.item1)
        document.querySelector("#item2").addEventListener("click", minutes.item2)
        document.querySelector("#item3").addEventListener("click", minutes.item3)
        document.querySelector("#item4").addEventListener("click", minutes.item4)
        document.querySelector("#item5").addEventListener("click", minutes.item5)
        document.querySelector("#item6").addEventListener("click", minutes.item6)
        document.querySelector("#item7").addEventListener("click", minutes.item7)
        document.querySelector("#item8").addEventListener("click", minutes.item8)
        document.querySelector("#item9").addEventListener("click", minutes.item9)
        document.querySelector("#item10").addEventListener("click", minutes.item10)
        document.querySelector("#item11").addEventListener("click", minutes.item11)
        document.querySelector("#item12").addEventListener("click", minutes.item12)
        document.querySelector("#item13").addEventListener("click", minutes.item13)
        document.querySelector("#item14").addEventListener("click", minutes.item14)
        document.querySelector("#item15").addEventListener("click", minutes.item15)
        document.querySelector("#item16").addEventListener("click", minutes.item16)
        document.querySelector("#item17").addEventListener("click", minutes.item17)
        document.querySelector("#item18").addEventListener("click", minutes.item18)
        document.querySelector("#item19").addEventListener("click", minutes.item19)
        document.querySelector("#item20").addEventListener("click", minutes.item20)
        document.querySelector("#item21").addEventListener("click", minutes.item21)
        document.querySelector("#item22").addEventListener("click", minutes.item22)

    })
    .catch(err => {
        console.log(`error ${err}`)
    })