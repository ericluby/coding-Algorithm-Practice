var flipAndInvertImage = function(A) {
  const output = []
  A.forEach((row)=>{
      newRow = []
      row.forEach((element)=>{
          if(element === 0){
              newRow.unshift(1)
          }else if(element === 1){
              newRow.unshift(0)
          }
      })
      output.push(newRow)
  })
  return output
};


const A1 = [[1,1,0],[1,0,1],[0,0,0]]

console.log(flipAndInvertImage(A1)) // expected output = [[1,0,0],[0,1,0],[1,1,1]]