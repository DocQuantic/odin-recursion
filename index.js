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

function merge(left, right){
    let array = new Array(left.length+right.length)
    let leftIndex = 0
    let rightIndex = 0
    for(let i=0; i<array.length; i++){
        if(left[leftIndex] < right[rightIndex]){
            array[i] = left[leftIndex]
            leftIndex++
        }else if(left[leftIndex] > right[rightIndex]){
            array[i] = right[rightIndex]
            rightIndex++
        }else if(leftIndex===left.length){
            array[i] = right[rightIndex]
            rightIndex++
        }else if(rightIndex===right.length){
            array[i] = left[leftIndex]
            leftIndex++
        }
    }
    return array
}

function mergeSort(array){
    if(array.length === 1){
        return array
    } else {
        let leftArray = array.slice(0, Math.floor(array.length/2))
        let rightArray = array.slice(Math.floor(array.length/2), array.length)
        
        leftArray = mergeSort(leftArray)
        rightArray = mergeSort(rightArray)

        return merge(leftArray, rightArray)
    }
}

console.log(mergeSort([79, 100, 105, 110]))

