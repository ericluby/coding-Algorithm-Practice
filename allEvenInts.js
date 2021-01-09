// 1 Given an array of integers, return true if all numbers found in the array are even, otherwise return false

const allEvenInts = (arrayOfInts) =>{
  let allEven = true
  arrayOfInts.forEach((int)=>{
    if(int%2 === 1){
      allEven = false
    }
  })
  return allEven
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [2, 4, 6, 8, 10]

console.log(allEvenInts(arr1))  // expected output false
console.log(allEvenInts(arr2))  // expected output true