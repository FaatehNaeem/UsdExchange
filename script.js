function convertToUpperCase(inputText) {
  return inputText.toUpperCase();
}
function getValue() {
  let currency = document.getElementById("currency");

  let inputValue = convertToUpperCase(currency.value);
  var displayValueElement = document.getElementById("displayValue");
  displayValueElement.textContent = inputValue;
  return inputValue;
}

function conversion(inputValue) {
  const url = "https://exchangerate-api.p.rapidapi.com/rapid/latest/USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "671a844afbmsh8956553c4ff9786p13f976jsnccfa39fce8d2",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const exchangeRates = data.rates;

      if (exchangeRates && exchangeRates[inputValue]) {
        const exchangeRate = exchangeRates[inputValue];
        document.getElementById("result").innerHTML =
          "Exchange Rate: " + exchangeRate;
      } else {
        document.getElementById("result").innerHTML =
          "Currency not found in exchange rates.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

document
  .getElementById("getExchangeRateButton")
  .addEventListener("click", function () {
    inputValue = getValue();
    conversion(inputValue);
  });
