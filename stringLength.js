const stringLength = (str) => {
    if (str.length >= 1 && str.length <= 10 ){
        return str.length
    }else{
        throw new Error("string should not exceed 10 characters or should not be empty")
    }
    
}

console.log(stringLength("kkkkk"))
module.exports = stringLength