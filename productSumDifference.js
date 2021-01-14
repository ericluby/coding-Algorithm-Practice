var subtractProductAndSum = function(n) {
  const num = n.toString()
  const digits = num.split('')
  let sum = 0
  let product = 1
  digits.forEach((digit)=>{
      intDigit = Number(digit)
      sum += intDigit
      product *= intDigit
  })
  const diff = product - sum
  return diff
};

n1 = 234
n2 = 4421

console.log(subtractProductAndSum(n1))  // expected output = 15
console.log(subtractProductAndSum(n2))  // expected output = 21