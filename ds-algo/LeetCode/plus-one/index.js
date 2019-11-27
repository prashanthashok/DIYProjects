/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    debugger;
    if(digits.length < 1) return [];
    let carry = true;
    let position = digits.length-1;
    while(carry){
        
        let digit = digits[position] + 1;
        if(digit > 9) {
            if(position == 0){
                carry = false;
                digits[position] = 0;
                digits.unshift(1);
            }
            else{
                carry = true;
                digits[position] = 0;
                position--; 
            }
        } else {
            digits[position] = digit;
            carry = false;
        }
    }
    
    return digits;
    
};

module.exports = plusOne;

