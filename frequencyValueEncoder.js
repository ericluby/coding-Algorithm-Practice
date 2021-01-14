var decompressRLElist = function(nums) {
  let freq = []
  let val = [] 
  const output = []
  nums.forEach((num, index)=>{
      if(index % 2 === 1){
          val.push(num)
      }else{
          freq.push(num)
      }
  })
  let i = 0
  while(i < freq.length){
      const frequency = freq[i]
      const value = val[i]
      let j = 0
      while(j < frequency){
          output.push(value)
          j += 1
      }
      i += 1 
  }
  return output
};


nums1 = [1,2,3,4]
nums2 = [1,1,2,3]

console.log(decompressRLElist(nums1)) // expected output = [2,4,4,4]
console.log(decompressRLElist(nums2)) // expected output = [1,3,3]
