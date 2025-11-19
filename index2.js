function applyOperation(numbers, operation) {
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        arr.push(operation(numbers[i]))
    }
    return arr
}

let nums = [1,2,3,4]

let doubled = applyOperation(nums, function(n){
    return n*2
})

let squared = applyOperation(nums, function(n){
    return n*n
})

console.log(doubled)
console.log(squared)
