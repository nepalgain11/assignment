//kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer >= .01 ){
        let meter = kilometer * 1000;     //kilometer to meter convert
         return meter;
    }
    else {
        return "Invalid Number." // input positive value
    } 
}
var result = kilometerToMeter(1);
console.log(result);
//---------------------------------------------------------------------------------

// budgetCalculator

function budgetCalculator(clock, phone, labtop){
    
    if(clock >= 1 || clock >= 0){
       var  clockPrice = 50 * clock; // increase clock value
    }
    else{
        return "Please input 'Clock' valid value"
    }
    if(phone >= 1 || clock >= 0){
        var phonePrice = 100 * phone;  // increase phone  price
     }
    else{
        return "Please input 'Phone' valid value"
    }
    if(labtop >= 1 || clock >= 0){
        var labtopPrice = 500 * labtop;   // increase labtop price
    }
    else{
        return "Please input 'Labtop' valid value"
    }

    const totalPrice = clockPrice + phonePrice + labtopPrice;
    return totalPrice;

}

var result = budgetCalculator(0, 1, 1);
console.log(result);


































