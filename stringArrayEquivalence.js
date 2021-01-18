var arrayStringsAreEqual = function(word1, word2) {
  const word1Joined = word1.join('')
  const word2Joined = word2.join('')
  if(word1Joined === word2Joined){
      return true
  }else{
      return false
  }
};

const word1 = ['ab', 'cd']
const word2 = ['a', 'bcd']
const word3 = ['abc', 'df']

console.log(arrayStringsAreEqual(word1, word2)) // expected output = true
console.log(arrayStringsAreEqual(word1, word3)) // expected output = false
