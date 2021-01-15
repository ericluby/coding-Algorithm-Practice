var countConsistentStrings = function(allowed, words) {
  const allowedChars = allowed.split('')
  const allowedWords = []
  words.forEach((word)=>{
      let isAllowed = true
      const wordChars = word.split('')
      wordChars.forEach((char)=>{
          if(allowedChars.includes(char)){
              
          }else{
              isAllowed = false
          }
      })
      if(isAllowed === true){
          allowedWords.push(word)
      }
  })
  return allowedWords.length
};

allowed1 = "ab"
words1 = ["ad","bd","aaab","baa","badab"]

allowed2 = "cad"
words2 = ["cc","acd","b","ba","bac","bad","ac","d"]

console.log(countConsistentStrings(allowed1, words1)) // expected output = 2
console.log(countConsistentStrings(allowed2, words2)) // expected output = 4
