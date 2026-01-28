/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // loop pertama : tandai angka yang muncul 
  for (let i  =0 ; i <nums.length; i++) { 
    // ambil nilai absolut (karena bisa negatif)
    let val = Math.abs(nums[i]); 
      
      // tandai index (val-1) sebagai negatif
      let index = val-1; 
      if(nums[index] > 0) { 
        nums[index] = -nums[index]; 
      }
  }  
  // array hasil
  const result = []; 

  // loop kedua : cari yang masih positif
  for (let i=0; i < nums.length; i++) { 
    // jika masih positif, berarti (i+1) hilang
    if (nums[i] >0){ 
        result.push(i+1); 
    }
  } return result;
};