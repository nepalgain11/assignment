//kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer >= .01 ){
        let meter = kilometer * 1000;     //kilometer to meter convert
         return meter;
    }
    else {
        return "Please input valid number." // invalid number 
    } 
}
var result = kilometerToMeter(2.5);
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

var result = budgetCalculator(2, 2, 5);
console.log(result);
//-------------------------------------------------------------------------------

//hotelCost 

function hotelCost (day){

    if (day<=10 && day>=1 ){
        var firstTenDay = day * 100;    //increment  value 
        return firstTenDay; // sum up first 10 hotel days
    }
    

    if (day >=11 && day <=20){
        for (var i=0; i<=10;i++ ){
            var element = [i]*100;
        }
        var secondTenDay = [day -10] * 80;   // sum up second (10 to 20 day) 10 hotel days
        const SecondValue = element + secondTenDay;
        return SecondValue;
    }
   
    if (day >=21){
        for (var i=0; i<=10;i++ ){
            var element2 = [i]*100;
        }
        for (var i=0; i<=10;i++ ){
            var element3 = [i]*80;
        }
        var totalDay = element2 + element3 + [day-20]*50;  // sum up total  hotel days
        return totalDay;
    }
    else {
        return "invalid input number"; // invalid input 
    }
}
var result = hotelCost(39);
console.log(result);
//----------------------------------------------------------------------------

//megaFriend

function megaFriend (names){
    var  largestValue = "";
    for (var i = 0; i < names.length; i++ ){
        var currentItem = names[i];
        if(currentItem.length > largestValue.length){
            largestValue = names[i];
        }
    }
    return largestValue;

}
var friendsName = ["nepal", "Nepal Gain", "gain","subrata","mondal","nilanjona","jhankar mahbub vai"];
var arrayName = megaFriend (friendsName);
console.log(arrayName);













