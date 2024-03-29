import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num1: "", num2: "", result: 0 };

        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);

        this.clear = this.clear.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
    }

    setNum1(e) {
        const num1 = e.currentTarget.value ? parseInt(e.currentTarget.value) : "";
        this.setState({ num1 }, () => {
            console.log("num1 is set to: " + this.state.num1);
        });
    }

    setNum2(e) {
        const num2 = e.currentTarget.value ? parseInt(e.currentTarget.value) : "";
        this.setState({ num2 }, () => {
            console.log("num2 is set to: " + this.state.num2);
        });
    }

    clear(e) {
        e.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 });
    }

    add(e) {
        e.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    }

    subtract(e) {
        e.preventDefault();
        const result = this.state.num1 - this.state.num2;
        this.setState({ result });
    }

    multiply(e) {
        e.preventDefault();
        const result = this.state.num1 * this.state.num2;
        this.setState({ result });
    }

    divide(e) {
        e.preventDefault();
        const result = this.state.num1 / this.state.num2;
        this.setState({ result });
    }

    render() {
        const { num1, num2, result } = this.state; //  destructure the properties: now we can use result instead of this.state.result
        return (
            <div>
                <h1>{result}</h1> 

                <input onChange={this.setNum1} value={num1}/>
                <input onChange={this.setNum2} value={num2}/>

                <button onClick={this.clear}>Clear</button>
                <br />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        );
    }
}

export default Calculator;
