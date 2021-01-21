//kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer >= .01 ){
        let meter = kilometer * 1000;     //kilometer to meter convert
         return meter;
    }
    else {
        return "Please input valid number." // input positive value
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

var result = budgetCalculator(1, 1, 10);
console.log(result);
//-------------------------------------------------------------------------------

//hotelCost 

function hotelCost (day){
    if (day<=10 && day>=1 ){
        var firstValue = day * 100;
        return firstValue;
    }
    if (day >=11 && day <=20){
        for (var i=0; i<=10;i++ ){
            var element = [i]*100;
        }
        var secondValue = [day -10] * 80;
        var total = element + secondValue;
        return total;
    }

    // if (day >=21){
    //     for (var i=9; i<=19;i++ ){
    //         var element2 = [i]*80;
    //     }
    //     var thirdValue = [day -20] * 50;
    //     var total2 = thirdValue + element2;
    //     return total2;
    // }

    
    //var thirdValue = day * 50;

    // return  firstValue;
    

}


var result = hotelCost(20);
console.log(result);




























