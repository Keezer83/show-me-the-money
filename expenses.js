//Get the inputs and table elements and create the event listener for adding an expense
document.getElementById("addExpense").addEventListener("click", addExpense);
const expenseBody = document.getElementById("expenseItem");
let expenseInputs = document.querySelectorAll(".expenseInputs");

//function that creates and object for each expense line with the entered values and adds it to the table
function addExpense() {
  const expenseLine = {
    when: document.getElementById("when").value,
    what: document.getElementById("what").value,
    howMuch: document.getElementById("howMuch").value,
    where: document.getElementById("where").value,
  };
  const newExpense = document.createElement("tr");
  newExpense.setAttribute("class", "expense");
  const expenseWhen = document.createElement("td");
  const expenseWhat = document.createElement("td");
  const expenseHowMuch = document.createElement("td");
  const expenseWhere = document.createElement("td");
  const deleteExpense = document.createElement("button");
  deleteExpense.setAttribute("type", "submit");
  deleteExpense.innerText = "Delete Line";

  //event listener and function that removes the expense line from the table
  deleteExpense.addEventListener("click", function removeExpenseLine() {
    newExpense.remove();
  });

  //set the text values for the expense line
  expenseWhen.innerText = expenseLine.when;
  expenseWhat.innerText = expenseLine.what;
  expenseHowMuch.innerText = expenseLine.howMuch;
  expenseWhere.innerText = expenseLine.where;

  expenseBody.appendChild(newExpense);
  newExpense.append(
    expenseWhen,
    expenseWhat,
    expenseHowMuch,
    expenseWhere,
    deleteExpense
  );
  expenseInputs.forEach(function (input) {
    input.value = "";
  });
}
