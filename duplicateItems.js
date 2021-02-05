// Given an array, return the list of elements that occur more than once

const sampleArr = [1, 'A', 2, 'A', 3, 'B', 1]

const duplicateItems = (array) => {
  let elementsObj = new Object()
  const outputElements = []
  array.forEach((element)=>{
    if(elementsObj[element]){
      outputElements.push(element)
      // elementsObj.element += 1
    }else{
      elementsObj[element] = 1
    }
  })
  return outputElements
}

console.log(duplicateItems(sampleArr))  // expected output = ['A', 1]
