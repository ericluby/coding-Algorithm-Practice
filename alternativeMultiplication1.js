// Write a multiplication function without using the * 
// operation. Determine what arguments you think this 
// function accept. The return of the function should be 
// the product of the function.

const multiply = (x, y) => {
  let output = 0

  if(x === 0 || y === 0){
    output = 0
  }else{
    output = x / (1 / y)
  }
  return output
}

console.log(multiply(5, 6)) // expected output = 30