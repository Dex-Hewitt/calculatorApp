// Display Selector

const display = document.querySelector(".display")

// Number Selectors

const number = [...document.querySelectorAll(".number")]
const [one,two,three,four,five,six,seven,eight,nine,zero] = number

// Operator Selectors 

const operators = [...document.querySelectorAll(".operator")]
const [plus, minus, times, divide, squared, powerTo, equals, clear, allClear] = operators

// Initialising Mutable Variables

let firstArgument = [0]

// Operation Event Listeners

plus.addEventListener("click", () => {
    
    console.log("clicked")
})

minus.addEventListener("click", () => {
    
})

times.addEventListener("click", () => {
    
})

divide.addEventListener("click", () => {
    
})

squared.addEventListener("click", () => {
    
})

powerTo.addEventListener("click", () => {
    
})

equals.addEventListener("click", () => {
    
})

clear.addEventListener("click", () => {
    
})

allClear.addEventListener("click", () => {
    
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



// Operator Event Listeners

function writeNumber(number) {
    if(firstArgument == 0){
        firstArgument = number
        display.textContent = number
    }  else {
        firstArgument = String(firstArgument) + String(number)
        display.textContent = Number(firstArgument)
    }
}

function equalsOperator() {

}