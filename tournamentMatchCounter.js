var numberOfMatches = function(n) {
  let isEven
  const totalMatches = []
  if(n%2 === 0){
    isEven = true
  }else{
    isEven = false
  }
  if(isEven === true){
    let m = n
    while(m > 1){
      totalMatches.push(m / 2)
      m = m / 2
    }
  }else{
    let m = n
    while(m > 1){
      if(m % 2 === 0){
        totalMatches.push(m / 2)
        m = m / 2
      }else{
        totalMatches.push((m - 1) / 2)
        m = ((m + 1) / 2)
      }
    }
  }
  console.log(totalMatches)
  let sum = 0
  totalMatches.forEach((round)=>{
    sum += round  
  })
  return sum
};

console.log(numberOfMatches(7)) // expected output = 6