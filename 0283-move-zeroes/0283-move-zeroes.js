/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0; 

    //pindahkan  semua angka non-zero ke depan
    for (let i = 0; i< nums.length; i++) { 
        if(nums[i] !== 0){ 
            nums[insertPos] = nums[i]; 
            insertPos++;
        }
    }
    // isi sisa array dengan 0
    while (insertPos < nums.length) { 
        nums[insertPos] = 0;
        insertPos++;
    }
};