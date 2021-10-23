class Calculator {
    constructor(a,b){
        this._a = a;
        this._b = b;
    }

    get sum(){
        return this._a + this._b;
    }

    get product(){
        return this._a * this._b;
    }
}
//let result = new Calculator(2,5)
//console.log(result.sum)

module.exports = Calculator;