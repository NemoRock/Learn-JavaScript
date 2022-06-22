let calculator = new Calculator()
calculator.read()

alert("Sum=" + calculator.sum())
alert("Mul=" + calculator.mul())

function Calculator(){
    this.read = function (){
        this.x = +prompt('Введите первое число','0')
        this.y = +prompt('Введите второе число','0')
    }
    this.sum = function (){
        return this.x + this.y
    }
    this.mul = function (){
        return this.x * this.y
    }
}



let accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
accumulator.read()
alert(accumulator.value)

function Accumulator(startValue){
    this.value = startValue
    this.read = function (){
        this.value += +prompt('Введите число','0')
    }
}