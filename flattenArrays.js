// Given an array of arrays, implement a flatten function that puts all elements in a single array

const flattenArr = (arrayOfArrays) => {
  const returnedArr = []
  arrayOfArrays.forEach((arr)=>{
    arr.forEach((ele)=>{
      returnedArr.push(ele)
    })
  })
  return returnedArr
}

const arrOfArrs = [[1, 2], [1, 2, 3], [1, 2, 3, 4]]

console.log(flattenArr(arrOfArrs))  // expected output = [1, 2, 1, 2, 3, 1, 2, 3, 4]