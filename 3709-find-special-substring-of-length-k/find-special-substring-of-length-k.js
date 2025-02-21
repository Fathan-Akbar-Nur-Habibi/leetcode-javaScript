/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    const n = s.length;

    for (let i = 0; i <= n - k; i++) {
        const substring = s.substring(i, i + k);
        
        const firstChar = substring[0];
        if (substring.split('').every(char => char === firstChar)) {
            const beforeChar = i > 0 ? s[i - 1] : null;

            const afterChar = i + k < n ? s[i + k] : null;

            if ((beforeChar === null || beforeChar !== firstChar) &&
                (afterChar === null || afterChar !== firstChar)) {
                return true;
            }
        }
    }

    return false;
};

console.log(hasSpecialSubstring("aaabaaa", 3)); // Output: true
console.log(hasSpecialSubstring("abc", 2));     // Output: false