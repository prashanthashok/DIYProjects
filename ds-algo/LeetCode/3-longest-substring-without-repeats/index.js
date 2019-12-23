var lengthOfLongestSubstring = function(s) {
    debugger;
    let leftWindow = 0;
    let rightWindow = 0;
    let length = 0;
    let charSet = new Map();
    
    //iterate through the string
    for(let l=0, r=0; r<s.length; ++r){
    
    if(charSet.has(s[r])) {
        l = Math.max(l, charSet.get(s[r])+1)
    }
    //add char and index to count
    charSet.set(s[r],r);
    length = Math.max(length, r-l+1);
 
    }
    return length;
};

module.exports = lengthOfLongestSubstring;