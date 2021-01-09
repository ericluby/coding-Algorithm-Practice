// Given an array of numbers, return whether the array is 
// sorted (low-to-high) or unsorted.

const sortedArrayOfNums = (arrayOfNums) => {
  let currentLargest = arrayOfNums[0]
  let sorted = true
  arrayOfNums.forEach((num)=>{
    if(num < currentLargest){
      sorted = false
    }else{
      currentLargest = num
    }
  })
  return sorted
}

const array1 = [ -2, 0, 1, 2, 4]  
const array2 = [ -2, 0, 3, 2, 4]  

console.log(sortedArrayOfNums(array1)) // expected output = true
console.log(sortedArrayOfNums(array2)) // expected output = false


// Alternative method using for instead of forEach
const sortedArrayOfNums2 = (arrayOfNums) => {
  let currentLargest = arrayOfNums[0]
  let sorted = true

  for (let index = 0; index < arrayOfNums.length; index++) {
    if(arrayOfNums[index] < currentLargest){
      sorted = false
      break
    }else{
      currentLargest = arrayOfNums[index]
    }
  }
  return sorted
}

console.log(sortedArrayOfNums2(array1)) // expected output = true
console.log(sortedArrayOfNums2(array2)) // expected output = false
