var lengthOfLongestSubstring = function(s) {
    let charSet = new Set(); // To keep track of characters in the current window
    let start = 0; // Left pointer of the window
    let maxLength = 0; // Variable to store the max length of substring
    
    // Iterate over the string with the right pointer 'end'
    for (let end = 0; end < s.length; end++) {
        // If character is in the set (duplicate), move 'start' to the right
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        
        // Add the current character to the set
        charSet.add(s[end]);
        
        // Calculate the max length of the window
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};
