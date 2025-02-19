/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const result = [];
    
    // Helper function for backtracking
    function backtrack(current) {
        // If the string reaches length n, add it to result
        if (current.length === n) {
            result.push(current);
            return;
        }
        
        // Try adding 'a', 'b', or 'c' ensuring no consecutive characters are the same
        const lastChar = current[current.length - 1];
        for (const char of ['a', 'b', 'c']) {
            if (char !== lastChar) {
                backtrack(current + char);
            }
        }
    }
    
    // Start the backtracking process with an empty string
    backtrack('');
    
    // Return the k-th string, if it exists, otherwise return an empty string
    return k <= result.length ? result[k - 1] : "";
};
