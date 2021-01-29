var projectionArea = function(grid) {
  let xz = 0
  let yz = 0
  // get xy
  const xy = grid.length * grid.length
  
  // get xz
  grid.forEach((element)=>{
      xz += Math.max(...element)
  })
  
  // get yz
  let i = 0
  const counter = []
  while(i < grid.length){
      grid.forEach((element)=>{
          counter.push(element[i])
      })
      yz += Math.max(...counter)
      i += 1
  }
  
  return (xy + xz + yz)
};

const grid1 = [[1,2],[3,4]]

console.log(projectionArea(grid1))  // expected output = 17 = (4 + 6 + 7)