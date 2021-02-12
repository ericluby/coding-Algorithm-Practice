// Write a function that takes two strings as arguments and returns a string containing only the 
// characters found in both strings.

const duplicateInStrings = (string1, string2) => {
  const string1Arr = string1.split('')
  const string2Arr = string2.split('')
  let output = ''
  string2Arr.forEach((element)=>{
    if(string1Arr.includes(element)){
      output += element
    }
  })
  return output
}

const string1 = 'hello from the other side'
const string2 = 'eric is ready to play games'

console.log(duplicateInStrings(string1, string2)) // expected output = 'eri is red to l mes'