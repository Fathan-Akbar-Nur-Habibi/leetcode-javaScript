/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map(); 
    for (let i=0; i<nums.length; i++) {
        // jika angka sudah pernah muncul 
        if(map.has(nums[i])) { 
            // hitung jarak indeks
            if(i - map.get(nums[i]) <= k){ 
                return true;
            }
        }
        // update indeks terakhir angka ini
        map.set(nums[i], i);
    } return false;
};