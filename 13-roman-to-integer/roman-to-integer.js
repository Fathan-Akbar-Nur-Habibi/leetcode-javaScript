/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = { 
        'I':1, 
        'V':5, 
        'X':10, 
        'L':50, 
        'C':100, 
        'D':500,
        'M': 1000
    }; 
    let total = 0; 
    const length = s.length; 
    for ( let i = 0; i < length; i++) { 
        const currentVal = romanMap[s[i]]; 
        const nextVal = romanMap[s[i+1]]; 

        if (nextVal > currentVal) { 
            total -= currentVal; 
        } else { 
            total += currentVal;
        }
    } return total; 
    }; 
    
    console.log(romanToInt("III")); 
    console.log(romanToInt("LVIII"));
    console.log(romanToInt("MCMXCIV"));