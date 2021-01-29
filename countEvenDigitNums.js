var findNumbers = function(nums) {
  numOfEvens = 0
  nums.forEach((num)=>{
      areDigitsEven(num)
  })
  return numOfEvens
};

const areDigitsEven = (num) =>{
  if(num.toString().length % 2 === 0){
      numOfEvens += 1
  }
}


const nums1 = [12,345,2,6,7896]

console.log(findNumbers(nums1)) // expected output = 2