console.log("Hello, World!")

function fibs(n){
    if(n===1){
        return [0]
    } else if(n===2){
        return [0, 1]
    } else {
        let arr = [0, 1]
        for(let i=2; i<n; i++){
            arr = arr.concat(arr[i-2]+arr[i-1])
        }
        return arr
    }
}

function fibsRec(n){
    let arr = []
    if(n===1){
        return [0]
    }
    if(n===2){
        return [0, 1]
    } else {
        prevArray = fibs(n-1)
        return prevArray.concat(prevArray[prevArray.length-1] + prevArray[prevArray.length-2])
    }
}


console.log(fibs(8))

console.log(fibsRec(8))