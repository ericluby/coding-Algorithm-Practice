// - Given a string, return a hash that, for each letter, stores an array of indices 
// where that letter can be found. For example, in the word "bee", "b" can be 
// found at index 0, and "e" can be found at index 1 & 2.


const example = 'bee'

const indicesOfLetters = (string) => {
  stringArr = string.split('')
  output = new Object()
  stringArr.forEach((letter, index)=> {
    if(output[letter]){
      output[letter] += ` & ${index}`
    }else{
      output[letter] = `${index}`
    }
  })
  return(output)
}


console.log(indicesOfLetters(example))  // expected output = {b: 0, e: 1, 2}