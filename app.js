$(function() {
    let btnRace = $(".btnRace");
    let btnStart = $(".btnStart");
    let car1 = $(".raceCar1");
    let car2 = $(".raceCar2");
    let CarWidth = $(".raceCar1").width();
    let raceTrack = $(window).width() - CarWidth;
    let time = $(".time");
    let table1 = $(".table1");
    let table2 = $(".table2");
    let place1 = "first";
    let place2 = "second";
    let table3 = $(".table3");
    let counter1 = 0;
    btnRace.on("click", function() {
        let counter = 3;
        let interval = setInterval(() => {
            if (counter > 0) {
                btnRace.prop('disabled', true);
                btnStart.prop('disabled', true);
                time.text(counter);
                counter--;
                $(".race").animate({
                    opacity: '0.5'
                })
            } else {
                let randomTime1 = Math.floor(Math.random() * 6000);
                let randomTime2 = Math.floor(Math.random() * 6000);
                counter1++;
                sessionStorage.setItem("counter1", counter1)
                $(".race").animate({
                    opacity: '1'
                })
                car2.animate({
                    left: raceTrack
                }, randomTime2, function() {
                    console.log(randomTime2)
                    if (randomTime2 <= randomTime1) {
                        $(".finish").animate({
                            opacity: "1"
                        })

                        $(".race").animate({
                            opacity: '0.5'
                        })
                        table1.prepend(`<tr><td class="place1">Finished in: <span class="carText1">${place1}</span> place with a time of: <span class="carText1">${randomTime2} </span> milliseconds! </td></tr>`);
                        let data1 = place1;
                        sessionStorage.setItem("savingData1", data1);
                        sessionStorage.setItem("savingTime2", randomTime2);
                    } else {
                        btnRace.prop('disabled', false);
                        btnStart.prop('disabled', false);
                        table1.prepend(`<tr><td class="place1">Finished in: <span class="carText1">${place2}</span> place with a time of: <span class="carText1">${randomTime2} </span> milliseconds! </td></tr>`);
                        let data1 = place2;
                        sessionStorage.setItem("savingData1", data1);
                        sessionStorage.setItem("savingTime2", randomTime2);
                    }
                })
                car1.animate({
                    left: raceTrack
                }, randomTime1, function() {
                    console.log(randomTime1)
                    if (randomTime1 <= randomTime2) {
                        $(".finish").animate({
                            opacity: "1"
                        })
                        $(".race").animate({
                            opacity: '0.5'
                        })
                        table2.prepend(`<tr><td class="place1">Finished in: <span class="carText2">${place1}</span> place with a time of: <span class="carText2">${randomTime1} </span> milliseconds!</td></tr>`);
                        let data2 = place1;
                        sessionStorage.setItem("savingData2", data2);
                        sessionStorage.setItem("savingTime1", randomTime1);
                    } else {
                        btnRace.prop('disabled', false);
                        btnStart.prop('disabled', false);
                        table2.prepend(`<tr><td class="place1">Finished in: <span class="carText2">${place2}</span> place with a time of: <span class="carText2">${randomTime1} </span> milliseconds! </td></tr>`);
                        let data2 = place2;
                        sessionStorage.setItem("savingData2", data2);
                        sessionStorage.setItem("savingTime1", randomTime1);
                    }
                })
                time.text("");
                clearInterval(interval);
            }
        }, 1000);
    })
    btnStart.on("click", function() {
        car1.animate({
            left: "0"
        })
        car2.animate({
            left: "0"
        })
        time.html('');
        $(".race").animate({
            opacity: '1'
        })
        $(".finish").animate({
            opacity: "0"
        })
    })
    let h3 = $("<h3\>");

    function results() {
        let count = sessionStorage.getItem("counter1");
        if (count > 0) {
            h3.insertBefore(table3);
            h3.text("Results from the previous time you played this game:");
            h3.css("padding-bottom", "40px");
            let getData1 = sessionStorage.getItem("savingData1");
            let getData2 = sessionStorage.getItem("savingData2");
            let getTime2 = sessionStorage.getItem("savingTime2");
            let getTime1 = sessionStorage.getItem("savingTime1");
            let text1 = $(".carText1").text();
            let text2 = $(".carText2").text()
            table3.append(`<tr><td class="newTable"><span class="carText1">${text1}</span> finished in <span class="carText1">${getData1}</span> place, with a time of <span class="carText1">${getTime2}</span> milliseconds!</td></tr><tr><td class="newTable"><span class="carText2">${text2}</span> finished in <span class="carText2">${getData2}</span> place, with a time of <span class="carText2">${getTime1}</span> milliseconds!</td></tr>`);
        }
    }
    window.onload = results();
});