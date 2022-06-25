
class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль")

alert( rabbit.hasOwnProperty('name')) // true
alert( Rabbit.prototype.__proto__ === Object.prototype ) // true
