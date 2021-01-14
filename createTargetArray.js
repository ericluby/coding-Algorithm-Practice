var createTargetArray = function(nums, index) {
  let i = 0
  const output = []
  while(i < nums.length){
      const num = nums[i]
      const dex = index[i]
      output.splice(dex, 0, num)
      i += 1
  }
  return output
};

nums1 = [0,1,2,3,4]
index1 = [0,1,2,2,1]

nums2 = [1,2,3,4,0]
index2 = [0,1,2,3,0]


console.log(createTargetArray(nums1, index1)) // expected output = [0,4,1,3,2]
console.log(createTargetArray(nums2, index2)) // expected output = [0,1,2,3,4]
