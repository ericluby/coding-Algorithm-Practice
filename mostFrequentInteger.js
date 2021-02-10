// Given an array of integers, find the most frequent integer in the array.  
// Assume there is a single answer

const mostFrequentInt = (arrayOfInts) => {
  arrayOfInts.sort()
  let currentFreq = 0
  let currentInt = arrayOfInts[0]
  let maxFreq = 0
  let maxInt
  arrayOfInts.forEach((integer, index)=>{
    if(integer === currentInt){
      currentFreq += 1
    }else{
      currentFreq = 1
      currentInt = integer
    }
    if(currentFreq > maxFreq){
      maxFreq = currentFreq
      maxInt = currentInt
    }
  })
  return maxInt
}


const arrayOfInts1 = [1, 5, -2, 5, -2, 0, -2, 4]
const arrayOfInts2 = [5, 5, 1, 5, -2, 0, -2, 4]

console.log(mostFrequentInt(arrayOfInts1))  // expected ouput = -2
console.log(mostFrequentInt(arrayOfInts2))  // expected ouput = 5
