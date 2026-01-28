/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // ubah nums1 menjadi set agar : 
  // -tidak ada duplkat
  // pencarian O(1)
  const setNums1 = new Set(nums1) ; 

  // set untuk menyimpan hasil (agar unik)
  const resultSet = new Set(); 

  // loop nums2
  for (let num of nums2) { 
    // jika elemen nums2 ada di nums1
    if(setNums1.has(num)) { 
        // masukan ke resultSet
        resultSet.add(num); 
    }
  }
  // ubah set menjadi array dan return
  return Array.from(resultSet)

};