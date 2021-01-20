var repeatedNTimes = function(A) {
  let repeatedElement
  const elements = []
  for(i = 0; i < A.length; i += 1){
      if(elements.includes(A[i])){
          repeatedElement = A[i]
          break
      }else{
          elements.push(A[i])
      }
  }
return repeatedElement
};


A1 = [1,2,3,3]
A2 = [2,1,2,5,3,2]

console.log(repeatedNTimes(A1)) // expected output = 3
console.log(repeatedNTimes(A2)) // expected output = 2
