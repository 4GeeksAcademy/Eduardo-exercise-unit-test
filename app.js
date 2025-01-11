let oneEuroIs = { 
    "JPY": 156.5, // japan yen 
     "USD": 1.07, // us dollar 
     "GBP": 0.87, // british pound 
     }; 
     function fromEuroToDollar(euro) { 
        let dollar = euro * oneEuroIs.USD; 
        return dollar; 
    } 
    function fromEuroToYen(euro) { 
        let yen = euro * oneEuroIs.JPY; 
        return yen; } 
    
        function fromEuroToPound(euro) { 
        let pound = euro * oneEuroIs.GBP; return pound; 
    }   
    module.exports = { fromEuroToDollar, fromEuroToYen, fromEuroToPound, oneEuroIs };