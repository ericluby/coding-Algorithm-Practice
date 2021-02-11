// Given a string, remove duplicate characters in the string keeping only the first occurrences. 
// For example, if the input is ‘tree traversal’ the output will be “tre avsl”.


const trimDupedString = (string) =>{
  const stringArr = string.split('')
  const existingChars = []
  let returnedString = ''
  stringArr.forEach((char)=>{
    if(existingChars.includes(char)){

    }else{
      existingChars.push(char)
      returnedString += char
    }
  })
  return returnedString
}


const string1 = 'tree traversal'

console.log(trimDupedString(string1)) // expected output = "tre avsl"