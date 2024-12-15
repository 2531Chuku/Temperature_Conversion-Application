const container = document.querySelector(".tempFormContainer");
function generateHTML(container) {
  let HTML = `<form id="js-weatherForm">
      <label for="tempConversion">Temperature</label>
      <input
        type="number"
        id="tempConversion"
        name="tempConversion"
        placeholder="Enter Temperature"
      />
      <input
        type="text"
        id="tempUnitConversion"
        name="tempConversion"
        placeholder="Enter Temperature Unit"
      />
      <input type="submit" value="Convert Temperature" />
      <div class="response">Response</div>
    </form>`;
  container.innerHTML = HTML;
}
generateHTML(container);

const weatherForm = document.getElementById("js-weatherForm");
const results = document.querySelector(".response");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const temp = document.getElementById("tempConversion");
  const unit = document.getElementById("tempUnitConversion");
  let currentTemp = temp.value;
  let preferUnit = unit.value;
  let convertTemp = parseInt(currentTemp);

  results.innerHTML = calculateTemp(convertTemp, preferUnit);
  clearValues();
});

function clearValues() {
  setTimeout(() => {
    results.innerHTML = "";
  }, 5000);
}

function calculateTemp(temp, unit) {
  switch (unit) {
    case "Fahrenheit":
      return tempCelsius(temp, unit);

    case "Celsius":
      return tempFahrenheit(temp, unit);

    default:
      return generateResponse();
  }
}

console.log(calculateTemp(12, "Celsius"));

function tempFahrenheit(tempCelsius, unit) {
  let tempUnit = "Celsius";
  if (unit === tempUnit) {
    return `${(tempCelsius * 9) / 5 + 32}°F`;
  }
  return generateResponse();
}

function tempCelsius(tempFahrenheit, unit) {
  switch (unit) {
    case "Fahrenheit":
      return `${((tempFahrenheit - 32) * 5) / 9} °C`;
    default:
      return generateResponse();
  }
}

function generateResponse() {
  return `Invalid Temperature Conversion`;
}
