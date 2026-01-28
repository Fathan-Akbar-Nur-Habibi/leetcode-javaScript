/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    // 1. Object untuk menyimpan frekuensi nums1
    const freqMap = {};

    // 2. Hitung frekuensi setiap angka di nums1
    for (let num of nums1) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // 3. Array untuk menyimpan hasil intersection
    const result = [];

    // 4. Loop nums2
    for (let num of nums2) {

        // 5. Jika angka ada di freqMap dan masih tersedia
        if (freqMap[num] > 0) {

            // 6. Masukkan ke hasil
            result.push(num);

            // 7. Kurangi frekuensi
            freqMap[num]--;
        }
    }

    // 8. Return hasil
    return result;
};
