/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = [1]; 
    // build row of index 1 to rowIndex

    for (let i =1; i <= rowIndex; i++) { 
        //add 1 in finally row
        row.push(1); 

        //update mid element of right to left
        for (let j= i-1; j>0; j--) { 
            row[j] = row[j] + row[j-1]; 
        }
    }
    return row;
};