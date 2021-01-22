


//kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer >= .01 ){
        let meter = kilometer * 1000;     //kilometer to meter convert
         return meter;
    }
    else {
        return "Invalid value" // invalid number 
    } 
}
var result = kilometerToMeter(-11.2);
console.log(result);

// -------------------------------------------------------------------------------------




// budgetCalculator

function budgetCalculator(clock, phone, labtop){
    
    if( clock >= 0){
       var  clockPrice = 50 * clock; // increase sum clock value
    }
    else if (clock <= 0){
        return "Please input 'Clock' valid value"
    }

    if( phone >= 0){
        var phonePrice = 100 * phone;  // increase sum phone  price
     }
    else if (phone <= 0){
        return "Please input 'phone' valid value"
    }

    if(labtop >= 0){
        var labtopPrice = 500 * labtop;   // increase sum labtop price
    }
    else if (labtop <= 0){
        return "Please input 'labtop' valid value"
    }
    const totalPrice = clockPrice + phonePrice + labtopPrice;
    return totalPrice;
}

var result = budgetCalculator(3, -2, 10);
console.log(result);

//----------------------------------------------------------------------------------------




//hotelCost 

function hotelCost (day){

    if (day<=10 && day>=1 ){
        var firstTenDay = day * 100; 
        return firstTenDay;    // total first 10 days cost
    }

    if (day >=11 && day <=20){
        for (var i=0; i<=10;i++ ){
            var element = [i]*100;
        }
        var secondTenDay = [day -10] * 80;   
        const SecondValue = element + secondTenDay;
        return SecondValue;      // total second (10 to 20 day) 10 days cost
    }
   
    if (day >=21){
        for (var i=0; i<=10;i++ ){
            var element2 = [i]*100;
        }
        for (var i=0; i<=10; i++ ){
            var element3 = [i]*80;
        }
        var totalDay = element2 + element3 + [day-20] * 50;  
        return totalDay;  // total hotel days cost
    }
    else {
        return "invalid input number"; // invalid input 
    }
}
var result = hotelCost(21);
console.log(result);

//-------------------------------------------------------------------------------------------




//megaFriend

function megaFriend (names){
    var  largestValue = "";
    for (var i = 0; i < names.length; i++ ){
        var currentItem = names[i].trim();
        if(currentItem.length > largestValue.length){
            largestValue = names[i];
        }
    }
    return largestValue;
}
var friendsName = ["Jhankar Mahbub Sir", "Nepal Gain" ,"Rahul Gain", "Gopal", "Monisha", "Nilanjona"];
var arrayName = megaFriend (friendsName);
console.log(arrayName);
