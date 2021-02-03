// Given a string representing a paragraph, return the 
// frequency of each word in the paragraph.

const string1 = 'Launch is cool and is fun and stuff'

const wordFrequency = (string) => {
  stringArr = string.split(' ')
  console.log(stringArr)
  let wordFreq = new Object()
  wordFreq.is = 1
  stringArr.forEach((word)=>{
    if(wordFreq[word]){
      wordFreq[word] += 1
    }else{
      wordFreq[word] = 1
    } 
  })
  console.log(wordFreq)
}

wordFrequency(string1)
