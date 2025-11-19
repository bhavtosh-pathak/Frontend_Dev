Array.prototype.myMap = function(fun) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(fun(this[i]))
    }
    return arr
}

console.log([1,2,3].myMap(function(n){ return n*2 }))
