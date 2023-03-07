import React from "react";
import Finance from "../images/Additional/finance.jpg"

// create a function to show the final output values 
function UserInput(props) {
return(
<div id="paymentSection">
    <div className="outputValue">
        <label>Monthly payment: £</label>
        <p>{props.monthly}</p>
    </div>
    <div className="outputValue">
        <label>Total payment: £</label>
        <p>{props.total}</p>
    </div>
</div>
)
}

// create a class for the interest calculator
class InterestCalculator extends React.Component {
    constructor(props) {
        super(props)
        // set the state values as blank
        this.state = {
        shoppingTotal: "",
        numberOfMonths: "",
        monthlyPayment: "",
        totalPayment: ""
        }


        // Bind the 'this' keyword to the functions ( i was having issues getting it to work otherwise)
        this.handleInput = this.handleInput.bind(this)
        this.calculatePayment = this.calculatePayment.bind(this)
    }

    //create a function to handle the input 
handleInput(e) {
    //assign the input value and input id to variables 
    const value = e.target.value;
    const id = e.target.id;

    // create a if statement to check which input is which and assign the relevant values to state 
    if (id === "shoppingTotal"){
        this.setState({
            shoppingTotal: value
        })
    }
    else {
        this.setState({
            numberOfMonths: value
        })
    }

}

// create a function to calculate the interest 
calculatePayment() {
    const interest = 1.2;
    const monthly = (this.state.shoppingTotal * interest) / this.state.numberOfMonths;
    const total = this.state.shoppingTotal * interest;
    this.setState({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: total.toFixed(2)
    })
}

//render the elements - calling the userInput function from earlier to display the final values 
render() {
    return(
        <div id="financeSection">
            <div id="financeDiv">
                <img id="financeImage" src={Finance}/>
                <h1 id="financeHeading">FINANCING</h1>
            </div>

            <div id="financeParagraphs">
                <p>At Famous Guitar Clothing, we understand that sometimes our customers need a little extra help when it comes to financing their purchases. <br/>
                    That's why we offer flexible finance options and monthly repayments on all products. <br/><br/>
                    To find out if your purchase is eligible and to see how much your monthly repayments would be, simply use our finance calculator below.<br/><br/>
                    It's easy to use - just input the value of the products you want to purchase and the number of months you'd like to spread your payments over, 
                    and we'll provide you with a monthly repayment amount.</p><br/>
                
                <p id="financeDisclaimer">*Please note that all financing is subject to credit checks.</p>
            </div>

            
            <div id="interestCalculator">
                <h2>FINANCE CALCULATOR</h2>
                <div id="interestInput">
                    <label className="inputItems">Total Shopping Value:  <input id="shoppingTotal" type="number" placeholder="Enter Total (£)" onChange={this.handleInput}></input></label><br/>
                    <label className="inputItems">Number of months:  <input id="numberOfMonths" type="number" placeholder="Enter Months" onChange={this.handleInput}></input></label><br/>
                </div>
                <button id="interestButton" onClick={this.calculatePayment}>Calculate</button>
                <br/><hr/>
                <UserInput monthly={this.state.monthlyPayment} total={this.state.totalPayment}/>
            </div>
        </div>
    )
}
}
export default InterestCalculator;

