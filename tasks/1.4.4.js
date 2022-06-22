
let calculator = {
    read(){
        this.a = +prompt('Введите число а','0')
        this.b = +prompt('Введите число b','0')
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this .b
    },
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())



let ladder ={
    step:0,
    up(){
        this.step++
        return this
    },
    down(){
        this.step--
        return this
    },
    showStep(){
        alert(this.step)
        return this
    },
}
ladder.up().up().down().up().down().showStep()
