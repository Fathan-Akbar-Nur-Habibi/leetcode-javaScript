var reverse = function(x) {
    // Define the 32-bit integer range
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    // Store the sign of x
    const sign = x < 0 ? -1 : 1;

    // Work with the absolute value of x
    x = Math.abs(x);

    // Reverse the digits of x
    let reversed = 0;
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // Apply the sign to the reversed number
    reversed *= sign;

    // Check if the reversed number is within the 32-bit integer range
    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }

    return reversed;
};
