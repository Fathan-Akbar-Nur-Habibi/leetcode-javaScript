/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []; 
    for(let i=0; i < numRows; i++) { 
        const row = new Array(i+1); 
        // elemen pertama selalu 1
        row[0]=1; 
        //elemen terakhir selalu 1
        row[i] = 1; 
        //hitung elemen tengah (jika ada)
        for(let j = 1; j < i; j++) { 
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        // masukan baris ke hasil
        result.push(row);
    } 
    return result;
};