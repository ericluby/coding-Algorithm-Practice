var largestAltitude = function(gain) {
  let currentAlt = 0
  let highestAlt = 0
  gain.forEach((gainedAlt)=>{
      currentAlt += gainedAlt
      if(currentAlt > highestAlt){
          highestAlt = currentAlt
      }
  })
  return highestAlt
};





const gain = [-2, 3, -5, 4, -2]

console.log(largestAltitude(gain))  // expected output = 1