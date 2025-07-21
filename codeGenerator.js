

function getRandomChar() {
let chars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890"
let R = (Math.random()* chars.length)
let floorNum = (Math.floor(R))
return chars.charAt(floorNum)
}


function getRandomWord(num=10) {
    let word = ""
    for(let i = 0; i < num ; i++) {
        word += getRandomChar()  
    }
    return word    
}

function getRandomCode(num=4) {
    let code = ""
    for(let i = 0; i < num ; i++) {
        if (i != num-1) {
            code += getRandomWord(5) + "-"
        }else {
            code += getRandomWord(5) 
        }
        
    }
    return code
}


function getRandomCodes(num=4) {
    let codes = []
    for(let i = 0; i < num ; i++) {
        if (i != num-1) {
            codes.push(getRandomCode())
        }
    }
    return codes
}


function printresult() {

    randCodes = getRandomCodes(10)
    print (getRandomCodes(10))
    
}

let NumberOfCode = document.getElementById("inputNum")



document.getElementById("inputNum")
document.getElementById("PrintCode").addEventListener("click", function() {
    document.getElementById("result1").innerHTML =  "aaaa"
})



