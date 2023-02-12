import {maxInArray} from "./maxInArray.js"
import {factorial1} from "./factorial.js"

let userChoise = prompt('Введите 1 - для maxInArray, 2 - для factorial')

if (userChoise == 1) {

    let userArray = prompt('Введите числа через запятую').split(' ')
    
    maxInArray(userArray)
}

if (userChoise == 2) {

    let factNum = prompt('Введите число')

    factorial1(factNum)
}

else {
    alert('stop')
}