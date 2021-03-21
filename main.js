let book = [{
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        maxPages: 200,
        onPage: 60,
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        maxPages: 250,
        onPage: 150,
    },
    {
        title: "50 Shades of Grey",
        author: "E.L. James",
        maxPages: 150,
        onPage: 150,
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        maxPages: 350,
        onPage: 300,
    },
    {
        title: "Hamlet",
        author: "Wiliam Shakespeare",
        maxPages: 550,
        onPage: 550,
    },
];
document.body.style.fontFamily = "'Roboto', sans-serif";
let ul = document.createElement("ul");
document.body.appendChild(ul);
let ul1 = document.createElement("ul");
document.body.appendChild(ul1);
book.forEach(function(el) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = `${el.title} by ${el.author}`;
})

book.forEach(function(el) {
    let li1 = document.createElement("li");
    ul1.appendChild(li1);
    if (el.maxPages == el.onPage) {
        li1.innerText = `You already have read ${el.title} by ${el.author}`;
        li1.style.color = "green";
    } else {
        li1.innerText = `You still need to read ${el.title} by ${el.author}`;
        li1.style.color = "red";
    }

})
let table = document.createElement("table");
document.body.appendChild(table);

let trow = document.createElement("tr");
table.appendChild(trow);
let thead = document.createElement("th");
trow.appendChild(thead);
thead.innerText = "Title";
thead.style.paddingRight = "70px";
thead.style.paddingLeft = "10px";
let thead1 = document.createElement("th");
trow.appendChild(thead1);
thead1.innerText = "Author";
thead1.style.paddingRight = "70px";
let thead2 = document.createElement("th");
trow.appendChild(thead2);
thead2.innerText = "Max Pages";
thead2.style.paddingRight = "70px";
let thead3 = document.createElement("th");
trow.appendChild(thead3);
thead3.innerText = "On Page";
thead3.style.paddingRight = "70px";
let thead4 = document.createElement("th");
trow.appendChild(thead4);
thead4.innerText = "Progress";

book.forEach(function(el) {

    let trow1 = document.createElement("tr");
    table.appendChild(trow1);
    let tdata = document.createElement("td");
    trow1.appendChild(tdata);
    tdata.innerText = el.title;
    tdata.style.paddingLeft = "10px";
    let tdata1 = document.createElement("td");
    trow1.appendChild(tdata1);
    tdata1.innerText = el.author;
    let tdata2 = document.createElement("td");
    trow1.appendChild(tdata2);
    tdata2.innerText = el.maxPages;
    let tdata3 = document.createElement("td");
    trow1.appendChild(tdata3);
    tdata3.innerText = el.onPage;

    let i = 0;
    if (i == 0) {
        i = 1;
        let tdata4 = document.createElement("td");
        trow1.appendChild(tdata4);
        let progress = document.createElement("div");
        tdata4.appendChild(progress);
        progress.classList.add("myProgress");
        let bar = document.createElement("div");
        progress.appendChild(bar);
        bar.classList.add("myBar");
        let width = Math.ceil((100 * el.onPage) / el.maxPages);
        let id = setInterval(frame, width);

        function frame() {
            if (width > 100) {
                clearInterval(id);
                i = 0;
            } else {
                bar.innerText = width + "%";
                bar.style.width = width + "%";

            }
        }
    }

})

let h4 = document.createElement("h4");
document.body.appendChild(h4);
h4.innerText = "Add a book to the list:";

h4.style.padding = "20px 0 20px 10px";
let input1 = document.createElement("input");
document.body.appendChild(input1);
input1.setAttribute("placeholder", "Book Title");
input1.style.marginLeft = "10px";
let input2 = document.createElement("input");
document.body.appendChild(input2);
input2.setAttribute("placeholder", "Book Author");
input2.style.marginLeft = "10px";
let input3 = document.createElement("input");
document.body.appendChild(input3);
input3.setAttribute("placeholder", "Current Page On...");
input3.style.marginLeft = "10px";
let input4 = document.createElement("input");
document.body.appendChild(input4);
input4.setAttribute("placeholder", "Book Max Pages");
input4.style.marginLeft = "10px";
let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Add to list";
button.style.marginLeft = "10px";

button.addEventListener("click", function() {
    let trow2 = document.createElement("tr");
    table.appendChild(trow2);
    let tdata5 = document.createElement("td");
    trow2.appendChild(tdata5);
    tdata5.innerText = input1.value;
    tdata5.style.paddingLeft = "10px";
    let tdata6 = document.createElement("td");
    trow2.appendChild(tdata6);
    tdata6.innerText = input2.value;
    let tdata7 = document.createElement("td");
    trow2.appendChild(tdata7);
    tdata7.innerText = input4.value;
    let tdata8 = document.createElement("td");
    trow2.appendChild(tdata8);
    tdata8.innerText = input3.value;
    let i = 0;
    if (i == 0) {
        i = 1;
        let tdata9 = document.createElement("td");
        trow2.appendChild(tdata9);
        let progress = document.createElement("div");
        tdata9.appendChild(progress);
        progress.classList.add("myProgress");
        let bar = document.createElement("div");
        progress.appendChild(bar);
        bar.classList.add("myBar");
        let width = Math.ceil((100 * input3.value) / input4.value);
        let id = setInterval(frame, width);

        function frame() {
            if (width > 100) {
                clearInterval(id);
                i = 0;
            } else {
                bar.innerText = width + "%";
                bar.style.width = width + "%";
            }
        }
    }
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
})