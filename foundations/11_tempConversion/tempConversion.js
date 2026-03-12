const convertToCelsius = function(fahrenheit) {
  // (fahrenheit - 32) * (5/9) = celcius
  let celcius=(fahrenheit-32) * (5/9);

  //round answer to 1 decimal
  celcius=(Math.round(celcius*10)) / 10;

  return celcius;
};

const convertToFahrenheit = function(celcius) {
  // (celcius * (9/5)) + 32 = fahrenheit
  let fahrenheit=(celcius*(9/5)) + 32;

  //round answer to 1 decimal
  fahrenheit=(Math.round(fahrenheit*10)) / 10;


  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
