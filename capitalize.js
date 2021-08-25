const capitalize = (str) => {
    let myArr = str.split("")
    myArr[0] = myArr[0].toUpperCase()
    return myArr.join("")

}

module.exports = capitalize