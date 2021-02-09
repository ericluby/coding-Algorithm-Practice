// Given a word, return whether it is a palindrome

const isPalindrome = (word) => {
  const wordArrReversed = word.split('')
  const wordArr2 = word.split('')
  wordArrReversed.reverse()
  let output = false
  if(wordArrReversed.join('') === wordArr2.join('')){
    output = true
  }
  return output
}

const word1 = 'donkey'
const word2 = 'madam'

console.log(isPalindrome(word1))  // expected output = false
console.log(isPalindrome(word2))  // expected output = true
