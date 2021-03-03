const fibonacci = (nums) =>{
  let i = 0
  let j = 1
  let stagingNum
  let n = 0
  let fibSeq = []
  fibSeq.push(i)
  fibSeq.push(j)
  while(n < nums){
    let stagingNum = i + j
    fibSeq.push(stagingNum)
    i = j
    j = stagingNum
    n += 1
  }
  return fibSeq
}

console.log(fibonacci(10))