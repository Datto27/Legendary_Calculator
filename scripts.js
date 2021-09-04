
class Calcuclator {
    constructor (prevOperandText, currOperandText) {
        this.prevOperandText = prevOperandText
        this.currOperandText = currOperandText
    }
    appendDigit(digit) {
        this.currOperandText.innerHTML += digit
        console.log(this.currOperandText)
    }
    clear() {
        this.currOperandText.innerHTML = ""
        this.prevOperandText.innerHTML = ""
    }
    delete() {
        this.currOperandText.innerHTML = this.currOperandText.innerHTML.slice(0, -1)
    }
    makeOperation(operation) {
        this.operation = operation
        if (!this.prevOperandText.innerHTML) {
            this.prevOperandText.innerHTML += this.currOperandText.innerHTML
            this.currOperandText.innerHTML = ""
        }
        else {
            let result
            let prev = parseFloat(this.prevOperandText.innerHTML)
            let curr = parseFloat(this.currOperandText.innerHTML)
            if (this.operation === "*") {
                result = prev * curr
                // console.log(result)
            }
            else if (this.operation === "/") {
                result = prev / curr                
            }
            else if (this.operation === "+") {
                result = prev + curr                
            }
            else if (this.operation === "-") {
                result = prev - curr                
            }
            this.currOperandText.innerHTML = result.toString()
            this.prevOperandText.innerHTML = ""
        }
    }
    calculate() {
        let result
        let prev = parseFloat(this.prevOperandText.innerHTML)
        let curr = parseFloat(this.currOperandText.innerHTML)
        switch (this.operation) {
            case "*":
                result = prev * curr
                break
            case "/":
                result = prev / curr
                break
            case "+":
                result = prev + curr
                break
            case "-":
                result = prev - curr
                break
        }
        this.currOperandText.innerHTML = result.toString()
        this.prevOperandText.innerHTML = ""
    }
}

// import elemenst
const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operation")
const deleteBtn = document.querySelector(".delete")
const clearBtn = document.querySelector(".clear")
const equalsBtn = document.querySelector(".equal")
const prevOperandText = document.querySelector(".previous-operand")
const currOperandText = document.querySelector(".current-operand")


const calculator = new Calcuclator(prevOperandText, currOperandText)

// events
clearBtn.addEventListener("click", (e) => {
    calculator.clear()
})
deleteBtn.addEventListener("click", (e) => {
    calculator.delete()
})
equalsBtn.addEventListener("click", (e) => {
    calculator.calculate()
})
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        calculator.appendDigit(number.innerText)
    })
})

operations.forEach(operation => {
    operation.addEventListener("click", (e) => {
        calculator.makeOperation(operation.innerHTML)
    })
})
