$(function() {

    let bike = $(".bike");
    let br = 1,
        br1 = 1,
        br2 = 1,
        br3 = 1,
        br4 = 1,
        br5 = 1,
        br6 = 1,
        br7 = 1,
        br8 = 1,
        br9 = 1;
    $.get("https://json-project3.herokuapp.com/products").then(function(data) {
        for (let i = 0; i < data.length; i++) {
            bike.append(`<div class="col-4 pb-5"><div class="card">
			<img class="card-img-top" src="img/${data[i].image}.png" alt="Card image cap">
			<div class="card-body">
			  <h6 class="card-title">${data[i].name}</h6>
			  <p class="card-text pb-2">${data[i].price} $</p>
			</div>
		  </div></div>`);
        }

        $(".show a span").eq(1).text(data.length);

        function bikes(el) {
            bike.append(`<div class="col-4 pb-5"><div class="card">
            <img class="card-img-top" src="img/${el.image}.png" alt="Card image cap">
            <div class="card-body">
            <h6 class="card-title">${el.name}</h6>
             <p class="card-text pb-2">${el.price} $</p>
            </div>
             </div></div>`);
        }
        $(".show a").children(":first-child").addClass("bolder");
        $(".show a").children(":last-child").addClass("color");
        $(".show a").on("click", function() {
            $(".show a").children(":first-child").addClass("bolder");
            $(".show a").children(":last-child").addClass("color");
            $(".link").children(":first-child").removeClass("bolder")
            $(".link").children(":last-child").removeClass("color")
            bike.html("");
            data.forEach(function(el) {
                bikes(el);
            })
        })

        $(".link").not($(".show a")).on("click", function() {
            let genderBrandName = $(this).children(":first-child").text().toUpperCase()
            let arr1 = data.filter(function(el) {
                return (el.gender == genderBrandName)
            })
            let arr2 = data.filter(function(el) {
                return (el.brand == genderBrandName)
            })
            bike.html("");
            arr1.forEach(function(el) {
                bikes(el)
            })
            arr2.forEach(function(el) {
                bikes(el)
            })
        })
        for (let i = 0; i < data.length; i++) {
            if (data[i].gender == "MALE") {
                $(".gender span").eq(1).text(br);
                br++;
            } else if (data[i].gender == "FEMALE") {
                $(".gender span").eq(3).text(br1);
                br1++;
            }
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].brand == "LE GRAND BIKES") {
                $(".brand span").eq(1).text(br2);
                br2++;
            } else if (data[i].brand == "KROSS") {
                $(".brand span").eq(3).text(br3);
                br3++;
            } else if (data[i].brand == "EXPLORER") {
                $(".brand span").eq(5).text(br4);
                br4++;
            } else if (data[i].brand == "VISITOR") {
                $(".brand span").eq(7).text(br5);
                br5++;
            } else if (data[i].brand == "PONY") {
                $(".brand span").eq(9).text(br6);
                br6++;
            } else if (data[i].brand == "FORCE") {
                $(".brand span").eq(11).text(br7);
                br7++;
            } else if (data[i].brand == "E-BIKES") {
                $(".brand span").eq(13).text(br8);
                br8++;
            } else if (data[i].brand == "IDEAL") {
                $(".brand span").eq(15).text(br9);
                br9++;
            }
        }
    })
    $(".link").on("click", function() {
        if (!$(this).data("clicked")) {
            $(this).children(":first-child").addClass("bolder");
            $(this).children(":last-child").addClass("color");
            $(".link").not($(this)).children(":first-child").removeClass("bolder")
            $(".link").not($(this)).children(":last-child").removeClass("color")
            $(".show a").children(":first-child").removeClass("bolder")
            $(".show a").children(":last-child").removeClass("color")
        }
    })

    $(".filters a").hover(
        function() {
            $(this).children(":first-child").addClass("colorOrange");
            $(this).children(":last-child").addClass("bgOrange");
        },
        function() {
            $(this).children(":first-child").removeClass("colorOrange");
            $(this).children(":last-child").removeClass("bgOrange");
        }
    )

});