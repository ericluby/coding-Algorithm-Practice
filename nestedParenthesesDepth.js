var maxDepth = function(s) {
  let output = 0
  sArr = s.split('')
  let currentDepth = 0
  sArr.forEach((char)=>{
      if(char === '('){
          currentDepth += 1
          if(currentDepth > output){
              output = currentDepth
          }
      }else if(char === ')'){
          currentDepth -= 1
      }
  })
  return output
};



const s1 = "(1+(2*3)+((8)/4))+1"
const s2 = "5"

console.log(maxDepth(s1)) // expected output = 3
console.log(maxDepth(s2)) // expected output = 0
