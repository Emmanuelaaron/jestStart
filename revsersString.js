const reverseString = (str) => {
    let strArr = str.split("")
    let arrReverse = strArr.reverse()
    return arrReverse.join("")
}

module.exports = reverseString