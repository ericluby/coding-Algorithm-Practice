// Given a word, return the same word without any vowels

const removeVowels = (word) => {
  const wordArr = word.split('')
  const returnedWordArr = []
  wordArr.forEach((char)=>{
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    if(vowels.includes(char) === true){
    }else{
      returnedWordArr.push(char)
    }
  })
  let finalWord = ''
  returnedWordArr.forEach((char)=>{
    finalWord += char
  })
  return finalWord
}

const word1 = 'House'
const word2 = 'LAMP'

console.log(removeVowels(word1))  // expected output Hs
console.log(removeVowels(word2))  // expected output LMP
