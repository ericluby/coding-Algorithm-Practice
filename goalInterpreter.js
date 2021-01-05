var interpret = function(command) {
  translatedArray = []
  array = command.split('')
  let i = 0
  while(i < array.length){
      if(array[i] === 'G'){
          translatedArray.push('G')
          i += 1
      }else if(array[i] === '(' && array[i + 1] === ')'){
          translatedArray.push('o')
          i += 2
      }else if(array[i] === '(' && array[i + 1] === 'a'){
          translatedArray.push('al')
          i += 4
      }else{
          console.log("error")
      }
  }
  return translatedArray.join('')
};


const command1 = 'G()()()(al)'
const command2 = '()G(al)G()(al)G'

// expected output = 'Goooal'
console.log(interpret(command1))

// expected output = 'oGalGoalG'
console.log(interpret(command2))