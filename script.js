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
  changeDueText.innerHTML += change.filter(ar => !ar.includes(0)).map(([currencyName, amount]) => `<p.> ${currencyName}: $${amount/100}</p>`).join("");
}

const cashRegisterChange = () => {
  const priceTotal = Math.round(price * 100);
  const cashTotal = Math.round(Number(cashInput.value) * 100);
  const changeDue = cashTotal - priceTotal;
  let change = changeDue;
  let registerDrawerTotal = 0;

  let cidChange = cid.map(ar => ar.slice())
  
  let changeDisplay = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0],
  ];

  

  for (const currenyBlock of cidChange) {
    registerDrawerTotal += (currenyBlock[1] * 100);
  }

  if (priceTotal > cashTotal) {
    alert("Customer does not have enough money to purchase the item");
  } else if (priceTotal === cashTotal) {
    changeDueText.innerHTML = "No change due - customer paid with exact cash";
    return;
  } else if  (registerDrawerTotal < changeDue) {
    changeDueText.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`
  } else {
    // loop checks for highest amount down to lowest and subtracts from change and the cidChange to keep track. If no remainder the cid updates to match cidChange and updates all values then displays the change and status. Using all values *100 to avoid decimals.
    while (change >= 0 ) {
      if (change > 10000 && cidChange[8][1] > 0) {
        change -= 10000
        // change to "ONE HUNDRED" value in cidChange
        cidChange[8][1] = Math.round((cidChange[8][1] * 100 - 10000)) / 100;
        // Adding 1 unit to "ONE HUNDRED" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "ONE HUNDRED")][1] += 10000;
      } else if (change >= 2000 && cidChange[7][1] > 0) {
        change -= 2000
        // change to "TWENTY" value in cidChange
        cidChange[7][1] = Math.round((cidChange[7][1] * 100 - 2000)) / 100;
        // Adding 1 unit to "TWENTY" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "TWENTY")][1] += 2000;
      } else if ( change >= 1000 && cidChange[6][1] > 0) {
        change -= 1000
        // change to "TEN" value in cidChange
        cidChange[6][1] = Math.round((cidChange[6][1] * 100 - 1000)) / 100;
        // Adding 1 unit to "TEN" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "TEN")][1] += 1000;
      } else if ( change >= 500 && cidChange[5][1] > 0) {
        change -= 500
        // change to "FIVE" value in cidChange
        cidChange[5][1] = Math.round((cidChange[5][1] * 100 - 500)) / 100;
        // Adding 1 unit to "FIVE" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "FIVE")][1] += 500;
      } else if ( change >= 100 && cidChange[4][1] > 0) {
        change -= 100
        // change to "ONE" value in cidChange
        cidChange[4][1] = Math.round((cidChange[4][1] * 100 - 100)) / 100;
        // Adding 1 unit to "ONE" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "ONE")][1] += 100;
      } else if ( change >= 25 && cidChange[3][1] > 0) {
        change -= 25
        // change to "QUARTER" value in cidChange
        cidChange[3][1] = Math.round((cidChange[3][1] * 100 - 25)) / 100;
        // Adding 1 unit to "QUARTER" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "QUARTER")][1] += 25;
      } else if ( change >= 10 && cidChange[2][1] > 0) {
        change -= 10
        // change to "DIME" value in cidChange
        cidChange[2][1] = Math.round((cidChange[2][1] * 100 - 10)) / 100;
        // Adding 1 unit to "DIME" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "DIME")][1] += 10;
      } else if ( change >= 5 && cidChange[1][1] > 0) {
        change -= 5
        // change to "NICKEL" value in cidChange
        cidChange[1][1] = Math.round((cidChange[1][1] * 100 - 5)) / 100;
        // Adding 1 unit to "NICKEL" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "NICKEL")][1] += 5
      } else if ( change >= 1 && cidChange[0][1] > 0) {
        change -= 1
        // change to "PENNY" value in cidChange
        cidChange[0][1] = Math.round((cidChange[0][1] * 100 - 1)) / 100;
        // Adding 1 unit to "PENNY" value in changeDisplay
        changeDisplay[changeDisplay.findIndex(ar => ar[0] === "PENNY")][1] += 1
      } else { 
        if (change > 0) {
          changeDueText.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`
          updateValues()
          // if change has remainer the cidChange reverts back to last cid
          cidChange = cid.map(ar => ar.slice());
        } else if (registerDrawerTotal === changeDue) {
          changeDueDisplay("CLOSED", changeDisplay)
        } else {
          // if change has no remainder the cid updates to match cidChange
          cid = cidChange.map(ar => ar.slice());
          updateValues()
          changeDueDisplay("OPEN", changeDisplay);
        }
        return
      }
    }
    
  }
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

purchaseBtn.addEventListener("click", cashRegisterChange );

cashInput.addEventListener("keydown", event => {
  if (event.key === `Enter`) {
    cashRegisterChange();
  }
});

updateValues();


