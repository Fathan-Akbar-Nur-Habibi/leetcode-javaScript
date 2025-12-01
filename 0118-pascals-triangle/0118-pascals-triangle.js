/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = []; 
  for (let i = 0; i < numRows; i++) { 
    const currentRow = []; 
    if (i === 0) { 
        currentRow.push(1); 
    } else { 
        const previousRow = triangle[i-1]; 
        currentRow.push(1); 
        for (let j = 1; j < previousRow.length; j++) {
                const sum = previousRow[j - 1] + previousRow[j];
                currentRow.push(sum);
            }
            currentRow.push(1); 
    }
    triangle.push(currentRow); 
  }  
  return triangle; 
};