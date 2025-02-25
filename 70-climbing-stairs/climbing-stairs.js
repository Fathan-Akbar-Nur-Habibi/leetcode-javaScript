/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    let a = 1, b = 2; // Base cases for n = 1 and n = 2
    for (let i = 3; i <= n; i++) {
        let temp = a + b; // ways to reach step i is the sum of ways to reach i-1 and i-2
        a = b; // update for next iteration
        b = temp;
    }
    return b; // return the number of ways to reach the top
};
