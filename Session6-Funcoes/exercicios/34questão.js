function compara(string1, string2){
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    Array(string1).forEach(letra => {
        if (!string2.includes(letra)) return false
    })
    return true
}
console.log(compara('abc','cba'))