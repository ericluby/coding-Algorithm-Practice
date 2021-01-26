var destCity = function(paths) {
  const startingPoints = []
  const destinations = []
  let output
  paths.forEach((path)=>{
      startingPoints.push(path[0])
      destinations.push(path[1])
  })
  destinations.forEach((destination)=>{
      if(startingPoints.includes(destination)){
          
      }else{
          output = destination
      }
  })
  return output
};


const path = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

console.log(destCity(path)) // expected ouput = 'sao Paulo'