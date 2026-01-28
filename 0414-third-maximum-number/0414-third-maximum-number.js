/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // inisialisasi tiga maksimum 
    let first = -Infinity; 
    let second = -Infinity; 
    let third = -Infinity; 

    // loop semua angka
    for (let num of nums) { 
        // skip jika duplikat
        if (num === first || num === second || num === third) { 
            continue; 
        }
        if (num > first) { 
            third = second; 
            second = first; 
            first = num; 
        }
        // update second & third
        else if (num > second) { 
            third = second; 
            second = num; 
        }
        else if (num > third) { 
            third = num; 
        }
    }
    return third === -Infinity ? first : third; 
};