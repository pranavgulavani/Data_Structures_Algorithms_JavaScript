const factorial = (n) =>{
    result = 1
    for(let i=2; i<=n; i++){
        result = result * i
    }
    return result
}

module.exports = factorial