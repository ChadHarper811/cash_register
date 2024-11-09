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
const changeDueText = document.getElementById("change-due");
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

const changeDueDisplay = (status, change) => {
  changeDueText.innerHTML = `<p>Status: ${status}</p>`;
  changeDueText.innerHTML += change.map(([currencyName, amount]) => `<p.> ${currencyName}: $${amount}</p>`).join("");
}

const cashRegisterChange = () => {
  const priceTotal = Math.round(price * 100);
  const cashTotal = Math.round(Number(cashInput.value) * 100);
  const changeDue = cashTotal - priceTotal;
  let change = changeDue;
  let registerDrawerTotal = 0;
  let descendingCid = cid.toReversed();

  for (const currenyBlock of cid) {
    registerDrawerTotal += (currenyBlock[1] * 100);
  }

  if (priceTotal > cashTotal) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (priceTotal === cashTotal) {
    changeDueText.innerHTML = "No change due - customer paid with exact cash";
    return;
  } else if  (registerDrawerTotal < changeDue) {
    changeDueDisplay("INSUFFICIENT_FUNDS", descendingCid)
  } else if (registerDrawerTotal === changeDue) {
    changeDueDisplay("CLOSED", descendingCid)
  } else {
    while (change >= 0) {
      if (change > 10000) {
        change -= 10000;
        cid[8][1] -= 100
      } else if ( change >= 2000) {
        change -= 2000
        cid[7][1] -= 20
      } else if ( change >= 1000) {
        change -= 1000
        cid[6][1] -= 10
      } else if ( change >= 500) {
        change -= 500
        cid[5][1] -= 5
      } else if ( change >= 100) {
        change -= 100
        cid[4][1] -= 1
      } else if ( change >= 25) {
        change -= 25
        cid[3][1] -= .25
      } else if ( change >= 10) {
        change -= 10
        cid[2][1] -= .1
      } else if ( change >= 5) {
        change -= 5
        cid[1][1] -= .05
      } else if ( change >= 1) {
        change -= 1
        cid[0][1] -= .01
      } else {
        changeDueDisplay("OPEN", descendingCid)
        return
      }
    }
  }

  updateValues();
}

const updateValues = changedue => {
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


