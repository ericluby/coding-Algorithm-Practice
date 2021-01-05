var maximumWealth = function(accounts) {
  let wealthiestAccount = 0
  accounts.forEach((customer)=>{
      const currentWealth = findSum(customer)
      if(currentWealth > wealthiestAccount){
          wealthiestAccount = currentWealth
      }
  })
  return wealthiestAccount
};


const findSum = (accounts)=>{
  let sum = 0
  accounts.forEach((account)=>{
      sum += account
  })
  return sum
}

const accounts1 = [[2,2,4],[1,4],[1,5,1]]
const accounts2 = [[3,7],[2,5,4],[3,1,2]]

// expected output = 8
console.log(maximumWealth(accounts1))

// expected output = 11
console.log(maximumWealth(accounts2))
