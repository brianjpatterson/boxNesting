/*/
You are given n rectangular boxes, the ith box has the length length|i|,
the width width|i| and the height height|i|. Your task is to check if 
it is possible to pack all boxes into one so that inside each box there 
is no more than one other box (which, in turn, can contain at most one 
other box, and so on). 

More formally, your task is to check whether there is such sequence of n different numbers p|i| (1 ≤ p|i| ≤ n) that for each 1 ≤ i < n the box
number p|i| can be put into the box number p|i|+1.

A box can be put into another box if all sides of the first one are less than the respective sides of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.
/*/ 
Array.prototype.polysum = function() {
    return this.reduce((a,b) => a + b, 0) }

Array.prototype.polysort = function() {
    return this.sort((a,b) => a - b) }
    
Array.prototype.sort2d = function(column) {
  column = typeof column === "undefined" ? 0 : column   
  return this.sort((a, b) => a[column]-b[column]); }

const rotateGrid = matrix => {
    const result=[]
    matrix[0].forEach( i => result.push(Array.from(Array().fill("."))) )  
    for (let idx=0;idx<matrix.length;idx++) 
        for (let indx=0;indx<matrix[idx].length;indx++) 
            result[indx][idx] = matrix[idx][indx]   
    return result }
   
function solution(length, width, height) {
    let matrix = []
    matrix.push(length, width, height)
    matrix = rotateGrid(matrix)
    matrix = matrix.map(e => [e.polysum(), ...e.polysort()] ).sort2d()
    for (let i=0;i<matrix.length-1;i++) {
        if (matrix[i+1][0] - matrix[i][0] < 3) return false   
        for (let j=0;j<matrix[i].length;j++) 
            if (matrix[i+1][j] - matrix[i][j] < 1) return false   
    }
   return true
}