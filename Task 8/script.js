/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return console.log(this.a + this.b);
    }

    subtraction() {
        return console.log(this.a - this.b);
    }

    multiplication() {
        return console.log(this.a * this.b);
    }

    division() {
        return console.log(this.a / this.b);
    }
}


const response = new Calculator(10, 50).division();