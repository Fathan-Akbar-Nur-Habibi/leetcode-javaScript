/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; 
    for (let j = 0; j< nums.length; j++) { 
        const currentNum = nums[j];
        if (currentNum !== val) { 
            nums[k] = currentNum; 
            k++;
        }
    }
    return k;
};