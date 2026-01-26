/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // variable for save result xor
    let result = 0; 
    // loop all element
    for (let i = 0; i < nums.length; i++) { 
        result = result ^ nums[i]; 
    } return result;
};