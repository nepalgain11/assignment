//kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer >= .01 ){
        let meter = kilometer * 1000;     //kilometer to meter convert
         return meter;
    }
    else if (kilometer == 0){
        return "Your input number is '0', which is not countable value." // 0 is not countable number 
    }
    else {
        return "Invalid Number." // input positive value
    } 
}
var result = kilometerToMeter();
console.log(result);