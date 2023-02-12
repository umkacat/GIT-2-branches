function maxInArray(array) {
    let maxElement = 0; 
    for  (let i = 0; i < array.length; i++) {
        if (Number(array[i]) > maxElement) {   
            maxElement = array[i]    
        }
    }

    alert(maxElement)

    return maxElement
}

export {maxInArray}