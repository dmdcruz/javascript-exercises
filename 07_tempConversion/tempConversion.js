const convertToCelsius = function(fahrenheit) {
  // x°F = (x-32) * (5/9) ºC

  let celcius = (fahrenheit-32)*(5/9);

  celcius = celcius.toFixed(1);

  return parseFloat(celcius)

};

const convertToFahrenheit = function(celcius) {
  //x °C ≘ (x × (9/5)+ 32) °F

  let fahrenheit = (celcius * (9/5) + 32)

  fahrenheit = fahrenheit.toFixed(1);

  return parseFloat(fahrenheit)

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
