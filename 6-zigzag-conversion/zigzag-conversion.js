var convert = function(s, numRows) {
    // If the number of rows is 1, no zigzag pattern is needed
    if (numRows === 1) return s;

    // Create an array to store the rows
    const rows = new Array(numRows).fill('');

    let currentRow = 0;
    let goingDown = false;

    // Traverse each character in the string
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        // If we are at the top or bottom row, change direction
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row based on the direction
        currentRow += goingDown ? 1 : -1;
    }

    // Join all the rows together to form the final string
    return rows.join('');
};
