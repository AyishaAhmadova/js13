const btn = document.getElementById("btn");
const input = document.getElementById("input");
const select = document.getElementById("form");
const result = document.getElementById("main");
let ratesData;

function change() {
  fetch(
    "https://api.exchangerate-api.com/v4/latest/AZN?apiKey=dd073148369117f5d7d24f86"
  )
    .then((res) => res.json())
    .then((data) => {
      ratesData = data.rates;
      Object.keys(ratesData).forEach((x) => {
        const option = document.createElement("option");
        option.value = x;
        option.textContent = x;
        select.appendChild(option);
      });
    })
    .catch((error) => console.error("Error:", error));
}

function getData() {
  const selected = select.value;
  const amount = parseFloat(input.value);

  const basee = "AZN";
  const rates = ratesData;

  const amountt = amount * rates[selected];

  result.innerHTML = `${amount} ${basee} = ${amountt.toFixed(2)} ${selected}`;
}

document.addEventListener("DOMContentLoaded", change);

btn.addEventListener("click", getData);
