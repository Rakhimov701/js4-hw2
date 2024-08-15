function rand(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let task = +prompt('Введите количество рандомных математических примеров')
let minNumber = 1
let maxNumber = 10

for (let i = 0; i < task; i++) {
    let one = rand(minNumber, maxNumber)
    let two = rand(minNumber, maxNumber)
    
    
    let answer

    if (one + two) {
        answer = one + two 
        let userAnswer1 = +prompt(one + ' + ' + two + ' =') 
        alert(userAnswer1 === answer ? 'Ваш ответ верный - ' + userAnswer1 : 'Ваш ответ неверный - ' + userAnswer1 + '. Правильный ответ - ' + answer)
    } else if (one - two) {
        answer = one - two 
        let userAnswer2 = +prompt(one + ' - ' + two + ' =');
        alert(userAnswer2 === answer ? 'Ваш ответ верный - ' + userAnswer2 : 'Ваш ответ неверный - ' + userAnswer2 + '. Правильный ответ - ' + answer)
    } else if (one * two) {
        answer = one * two 
        let userAnswer3 = +prompt(one + ' * ' + two + ' =')
        alert(userAnswer3 === answer ? 'Ваш ответ верный - ' + userAnswer3 : 'Ваш ответ неверный - ' + userAnswer3 + '. Правильный ответ - ' + answer) 
    } else {
        if(two === 0) two = 1
        answer = one / two 
        let userAnswer4 = +prompt(one + ' / ' + two + ' =') 
        alert(userAnswer4 === answer ? 'Ваш ответ верный - ' + userAnswer4 : 'Ваш ответ неверный - ' + userAnswer4 + '. Правильный ответ - ' + answer)
}
    }

    
    
    
    
