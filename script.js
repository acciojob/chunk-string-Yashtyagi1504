function stringChop(str, size) {
  let arr = []
    for(let i = 0;i<str.length;i+=size){
        let str1 = ""
        for(let j = i;j<i+size && j<str.length;j++){
            str1 += str[j]
        }
        arr.push(str1)
    }
    return arr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size))
