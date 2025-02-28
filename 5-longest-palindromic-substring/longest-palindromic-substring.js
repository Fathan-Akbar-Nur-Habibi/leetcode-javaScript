var longestPalindrome = function(s) {
    // Helper function to expand around the center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    };
    
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes (expand around single character)
        let oddPalindrome = expandAroundCenter(i, i);
        // Check for even-length palindromes (expand around two characters)
        let evenPalindrome = expandAroundCenter(i, i + 1);
        
        // Update the longest palindrome if needed
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    
    return longest;
};
