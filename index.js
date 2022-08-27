// Display Selector

const display = document.querySelector(".display")

// Number Selectors

const number = [...document.querySelectorAll(".number")]
const [one,two,three,four,five,six,seven,eight,nine,zero] = number

// Operator Selectors 

const operators = [...document.querySelectorAll(".operator")]
const [plus, minus, times, divide, squared, powerTo, equals, clear, allClear] = operators

// Initialising Mutable Variables

let valueCurrent = 0
let value = [0]

// Operation Event Listeners

plus.addEventListener("click", () => {
    changeCurrentValue()
    display.textContent += "+"
})

minus.addEventListener("click", () => {
    changeCurrentValue()
    display.textContent += "-"
})

times.addEventListener("click", () => {
    changeCurrentValue()
    display.textContent += "*"
})

divide.addEventListener("click", () => {
    changeCurrentValue()
    display.textContent += "/"
})

equals.addEventListener("click", () => {
    equalsOperator()
})

clear.addEventListener("click", () => {
    
})

allClear.addEventListener("click", () => {
    clearAll()
})

// Number Event Listeners

one.addEventListener("click", () => {
    writeNumber(1)
})

two.addEventListener("click", () => {
    writeNumber(2)
})

three.addEventListener("click", () => {
    writeNumber(3)
})

four.addEventListener("click", () => {
    writeNumber(4)
})

five.addEventListener("click", () => {
    writeNumber(5)
})

six.addEventListener("click", () => {
    writeNumber(6)
})

seven.addEventListener("click", () => {
    writeNumber(7)
})

eight.addEventListener("click", () => {
    writeNumber(8)
})

nine.addEventListener("click", () => {
    writeNumber(9)
})

zero.addEventListener("click", () => {
    writeNumber(0)
})

// Functions

function writeNumber(number) {
    if(value[0] == 0){
        value[0] = number
        display.textContent = number
    }  else if (value[valueCurrent] == 0){
        value[valueCurrent] = number
        display.textContent += number 
        console.log(value)
    } else {
        value[valueCurrent] = String(value[valueCurrent]) + String(number) // Convert to string to concatonate
        display.textContent = display.textContent.slice(0, -1) + Number(value[valueCurrent]) // Convert Back to number //Need to fix
        console.log(value)
    } 
}

function equalsOperator() {
    valueCurrent = 0
    value = [0]
    value[valueCurrent] = eval(display.textContent) 
    display.textContent = value[valueCurrent]
}

function clearAll() {
    value = [0]
    valueCurrent = 0
    display.textContent = value[valueCurrent] 
}

function changeCurrentValue (){
    valueCurrent++
    value.push(0)
}