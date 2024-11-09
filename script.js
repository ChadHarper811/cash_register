let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayTotal = document.getElementById("total");
const cashInput = document.getElementById("cash");
const changeDueDisplay = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn")
const penniesTotal = document.getElementById("pennies-total");
const nickelsTotal = document.getElementById("nickels-total");
const dimesTotal = document.getElementById("dimes-total");
const qurtersTotal = document.getElementById("quarters-total");
const onesTotal = document.getElementById("ones-total");
const fivesTotal = document.getElementById("fives-total");
const tensTotal = document.getElementById("tens-total");
const twentiesTotal = document.getElementById("twenties-total");
const hundredsTotal = document.getElementById("hundreds-total");

const changeDue = (status, change) => {
  changeDueDisplay.innerHTML = `<p>Status: ${status}</p>`;
  changeDueDisplay.innerHTML += change.map(([currencyName, amount]) => `<p.> ${currencyName}: $${amount}</p>`).join("");
}

const cashRegisterChange = () => {
  const pricetotal = Math.round(price * 100);
  const cashTotal = Math.round(Number(cashInput.value) * 100);

  console.log(pricetotal);
  console.log(cashTotal);
  
  updateValues();
}

const updateValues = change => {
    cashInput.value = "";

    displayTotal.innerText = ` $${price}`;
    penniesTotal.innerText = `$${cid[0][1]}`;
    nickelsTotal.innerText = `$${cid[1][1]}`;
    dimesTotal.innerText = `$${cid[2][1]}`;
    qurtersTotal.innerText = `$${cid[3][1]}`;
    onesTotal.innerText = `$${cid[4][1]}`;
    fivesTotal.innerText = `$${cid[5][1]}`;
    tensTotal.innerText = `$${cid[6][1]}`;
    twentiesTotal.innerText = `$${cid[7][1]}`;
    hundredsTotal.innerText = `$${cid[8][1]}`;
}

purchaseBtn.addEventListener("click", cashRegisterChange);

updateValues();


