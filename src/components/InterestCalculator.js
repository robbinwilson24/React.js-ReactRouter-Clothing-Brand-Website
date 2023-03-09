import React from "react";
import Finance from "../images/Additional/finance.jpg"

// create a function to show the final output values 
// add conditional rendering to display the repayments and interest rate if the props.total is larger than 0

function UserInput(props) {
    if (props.total > 0) {
      return (
        <div id="paymentSection">
          <div className="outputValue">
            <label>Total repayment: £</label>
            <p>{props.total}</p>
          </div>
          <div className="outputValue">
            <label>Monthly payment: £</label>
            <p>{props.monthly}</p>
          </div>
          <div>
            <p id="interestRate">19.2% annual interest rate applied.</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
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
     // 19.2% annual interest rate / 1.6% monthly interest rate
    const monthlyInterestRate = 0.016;
    const total = this.state.shoppingTotal * (1 + (monthlyInterestRate * this.state.numberOfMonths));
    const monthly = total / this.state.numberOfMonths;
  
    this.setState({
      monthlyPayment: monthly.toFixed(2),
      totalPayment: total.toFixed(2)
    });
  }
  

//render the elements - calling the userInput function from earlier to display the final values 
render() {
    return(
        <div id="financeSection">
            <div id="financeDiv">
                <img id="financeImage" src={Finance}/>
                <h1 id="financeHeading">Financing</h1>
            </div>

            <div id="financeParagraphs">
                <p>At Famous Guitar Clothing, we understand that sometimes our customers need a little extra help when it comes to financing their purchases. <br/>
                    That's why we offer flexible finance options and monthly repayments on all products. <br/><br/>
                    To find out if your purchase is eligible and to see how much your monthly repayments would be, simply use our finance calculator below.<br/><br/>
                    It's easy to use - just input the value of the products you want to purchase and the number of months you'd like to spread your payments over, 
                    and we'll provide you with a monthly repayment amount.</p><br/>
                
                <p id="financeDisclaimer">Please note that all purchases made through financing will be subject to a 19.2% annual interest rate. <br/>
                                          Additionally, financing options are subject to credit checks to ensure eligibility.</p>
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

