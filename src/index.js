module.exports = function towelSort (matrix) {
  if(matrix && matrix.length){
    let finalArr = [];

    for(let i = 0; i < matrix.length; i++){
        if(i % 2){
            matrix[i].sort((a, b) => b - a);
        }else{
            matrix[i].sort((a, b) => a - b);
        }

        finalArr = finalArr.concat(matrix[i]);
    }
    return finalArr;
  } else {
    return [];
  }
}
