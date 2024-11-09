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
    console.log(change)
    while (change >= 0) {
      if (change > 10000 && cid[8][1] > 0) {
        change -= 10000
        console.log(change)
        cid[8][1] = Math.round((cid[8][1] * 100 - 10000)) / 100;
      } else if (change >= 2000 && cid[7][1] > 0) {
        change -= 2000
        console.log(change)
        cid[7][1] = Math.round((cid[7][1] * 100 - 2000)) / 100;
      } else if ( change >= 1000 && cid[6][1] > 0) {
        change -= 1000
        console.log(change)
        cid[6][1] = Math.round((cid[6][1] * 100 - 1000)) / 100;
      } else if ( change >= 500 && cid[5][1] > 0) {
        change -= 500
        console.log(change)
        cid[5][1] = Math.round((cid[5][1] * 100 - 500)) / 100;
      } else if ( change >= 100 && cid[4][1] > 0) {
        change -= 100
        console.log(change)
        cid[4][1] = Math.round((cid[4][1] * 100 - 100)) / 100;
      } else if ( change >= 25 && cid[3][1] > 0) {
        change -= 25
        console.log(change)
        cid[3][1] = Math.round((cid[3][1] * 100 - 25)) / 100;
      } else if ( change >= 10 && cid[2][1] > 0) {
        change -= 10
        console.log(change)
        cid[2][1] = Math.round((cid[2][1] * 100 - 10)) / 100;
      } else if ( change >= 5 && cid[1][1] > 0) {
        change -= 5
        console.log(change)
        cid[1][1] = Math.round((cid[1][1] * 100 - 5)) / 100;
      } else if ( change >= 1 && cid[0][1] > 0) {
        change -= 1
        console.log(change)
        cid[0][1] = Math.round((cid[0][1] * 100 - 1)) / 100;
      } else {
        changeDueDisplay("OPEN", descendingCid);
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


