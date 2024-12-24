// let - переменная, которая может менять свое значение ( ; не обязателен и не несет ошибок в синтаксисе )

// let num = 42
// let firstName = 'Aida'

// можно менять значение переменной без команды let

// num = 50

// константы - переменная, которая не может менять свое значение

const isProgrammer = true

// функция alert выводит значение в всплывающем окне

// alert(firstName)

// console.log - выводит значение в консоль (Aida)

// console.log(firstName)
// console.log может принимать несколько значений (name: Aida true 50)
// console.log('name:', firstName, isProgrammer, num)

// математические операторы в js

// console.log(num + 17)
// console.log(num - 17)
// console.log(num * 17)
// console.log(num / 17)

// присваивание переменных

// let num2 = num + 17
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// конкатенация в js

// const fullName = firstName + ' ' + 'Parks'

// начинаем создавать калькулятор

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')
const submitButton = document.getElementById('submit')

plusButton.onclick = function () {
    action = '+'
}

minusButton.onclick = function () {
    action = '-'
}

multiplyButton.onclick = function () {
    action = '*'
}

divideButton.onclick = function () {
    action = '/'
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    if (actionSymbol === '+') {
        return num1 + num2
    }
    if (actionSymbol === '-') {
        return num1 - num2
    }
    if (actionSymbol === '*') {
        return num1 * num2
    }
    if (actionSymbol === '/') {
        return num1 / num2
    }
}

submitButton.onclick = function () {
    resultElement.textContent = computeNumbersWithAction(input1, input2, action)
}