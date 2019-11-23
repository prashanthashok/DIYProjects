/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    //find char value
    //initialize result by 0
    //multiple value by 26 and add to current result
    //this will always add the correct value for the first A-Z columns
    //it will only multiple from the 2nd A-Z columns onwards
    
    let result = 0;
    for(let i = 0; i < s.length; i++){
        let charValue = Math.abs(s.charCodeAt(i) - 'A'.charCodeAt(0)) + 1;
        result = result * 26 + charValue;
    }
    return result;
};