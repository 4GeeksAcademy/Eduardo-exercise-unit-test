let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromEuroToDollar(euro){
      let dollar = euro * oneEuroIs.USD
      return dollar
}
module.exports = {fromEuroToDollar, oneEuroIs}