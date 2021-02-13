let budgetInput = document.querySelector("#budget-input");
let budgetButton = document.querySelector("#budget-submit");
let budgetAmount = document.querySelector("#budget-amount");
let balanceAmount = document.querySelector("#balance-amount");
let balance = document.querySelector("#balance");
let h3 = document.querySelector("h3");
let expenseInput = document.querySelector("#expense-input");
let amountInput = document.querySelector("#amount-input");
let expenseButton = document.querySelector("#expense-submit");
let expenseAmount = document.querySelector("#expense-amount");
let budgetFeedback = document.querySelector(".budget-feedback");
let expenseFeedback = document.querySelector(".expense-feedback");
let tableExpense = document.querySelector(".table");
let table = document.createElement("table");
tableExpense.appendChild(table);
table.setAttribute("class", "row");
let thead = document.createElement("thead");
table.appendChild(thead);
thead.setAttribute("class", "col-12");
let counter = 0;
budgetButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (budgetInput.value == "" || budgetInput.value < 0) {
        budgetFeedback.innerText = "value cannot be empty or negative";
        budgetFeedback.classList.add("showItem");
        budgetInput.addEventListener("focus", function() {
            budgetFeedback.classList.remove("showItem")
        })
    } else {

        budgetAmount.innerText = budgetInput.value;
        balanceAmount.innerText = budgetAmount.innerText - expenseAmount.innerText;
        if (balanceAmount.innerText > 0) {
            balance.classList.remove("showRed");
            balance.classList.remove("showBlack");
            balance.classList.add("showGreen");
        } else if (balanceAmount.innerText == 0) {
            balance.classList.remove("showGreen");
            balance.classList.remove("showRed");
            balance.classList.add("showBlack");
        } else {
            balance.classList.remove("showGreen");
            balance.classList.remove("showBlack");
            balance.classList.add("showRed");
        }
        budgetInput.value = "";
    }
})
expenseButton.addEventListener("click", function(e) {
    e.preventDefault();
    if ((amountInput.value == "" || amountInput.value < 0) || expenseInput.value == "") {
        expenseFeedback.innerText = "value cannot be empty or negative";
        expenseFeedback.classList.add("showItem");
        amountInput.addEventListener("focus", function() {
            expenseFeedback.classList.remove("showItem");
        })
        expenseInput.addEventListener("focus", function() {
            expenseFeedback.classList.remove("showItem");
        })
    } else {
        expenseAmount.innerText = (parseInt(expenseAmount.innerText) + parseInt(amountInput.value));
        balanceAmount.innerText = budgetAmount.innerText - expenseAmount.innerText;
        if (balanceAmount.innerText > 0) {
            balance.classList.remove("showRed");
            balance.classList.remove("showBlack");
            balance.classList.add("showGreen");
        } else if (balanceAmount.innerText == 0) {
            balance.classList.remove("showGreen");
            balance.classList.remove("showRed");
            balance.classList.add("showBlack");
        } else {
            balance.classList.remove("showGreen");
            balance.classList.remove("showBlack");
            balance.classList.add("showRed");
        }

        if (counter == 0) {

            let tr = document.createElement("tr");
            thead.appendChild(tr);
            tr.classList.add("row", "text-center");
            let th1 = document.createElement("th");
            tr.appendChild(th1);
            th1.innerText = "Expense Title";
            th1.setAttribute("class", "col-4");
            let th2 = document.createElement("th");
            tr.appendChild(th2);
            th2.innerText = "Expense Value";
            th2.setAttribute("class", "col-4");
            let th3 = document.createElement("th");
            tr.appendChild(th3);
            th3.setAttribute("class", "col-4");
            th3.innerText = "";
            counter++;
        }
        let tr = document.createElement("tr");
        thead.appendChild(tr);
        tr.classList.add("row", "text-center");
        let td1 = document.createElement("td");
        tr.appendChild(td1);

        let expense = expenseInput.value;
        td1.innerText = "-" + " " + expenseInput.value;
        td1.classList.add("expense-title", "col-4");
        td1.style.textTransform = "uppercase";
        let td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.innerText = amountInput.value;
        td2.classList.add("expense-amount", "col-4");

        let td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.setAttribute("class", "col-4");

        let iconEdit = document.createElement("i");
        td3.appendChild(iconEdit);
        iconEdit.setAttribute("class", "fas fa-edit");
        iconEdit.classList.add("edit-icon");

        let iconDelete = document.createElement("i");
        td3.appendChild(iconDelete);
        iconDelete.setAttribute("class", "fas fa-trash ml-2");
        iconDelete.classList.add("delete-icon");
        expenseInput.value = "";
        amountInput.value = "";
        iconDelete.addEventListener("click", function(e) {
            e.target.parentElement.parentElement.remove();
            expenseAmount.innerText = (parseInt(expenseAmount.innerText) - parseInt(td2.innerText));
            balanceAmount.innerText = budgetAmount.innerText - expenseAmount.innerText;
            if (balanceAmount.innerText > 0) {
                balance.classList.remove("showRed");
                balance.classList.remove("showBlack");
                balance.classList.add("showGreen");
            } else if (balanceAmount.innerText == 0) {
                balance.classList.remove("showGreen");
                balance.classList.remove("showRed");
                balance.classList.add("showBlack");
            } else {
                balance.classList.remove("showGreen");
                balance.classList.remove("showBlack");
                balance.classList.add("showRed");
            }
        })
        iconEdit.addEventListener("click", function(e) {
            expenseInput.value = expense;
            amountInput.value = td2.innerText;
            e.target.parentElement.parentElement.remove();
            expenseAmount.innerText = (parseInt(expenseAmount.innerText) - parseInt(amountInput.value));
            balanceAmount.innerText = budgetAmount.innerText - expenseAmount.innerText;
            if (balanceAmount.innerText > 0) {
                balance.classList.remove("showRed");
                balance.classList.remove("showBlack");
                balance.classList.add("showGreen");
            } else if (balanceAmount.innerText == 0) {
                balance.classList.remove("showGreen");
                balance.classList.remove("showRed");
                balance.classList.add("showBlack");
            } else {
                balance.classList.remove("showGreen");
                balance.classList.remove("showBlack");
                balance.classList.add("showRed");
            }
        })
    }
})