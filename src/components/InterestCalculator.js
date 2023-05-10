import React, { useState } from 'react';
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


function InterestCalculator() {
  const [shoppingTotal, setShoppingTotal] = useState("");
  const [numberOfMonths, setNumberOfMonths] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    if (id === "shoppingTotal") {
      setShoppingTotal(value);
    } else {
      setNumberOfMonths(value);
    }
  };

  const calculatePayment = () => {
    const monthlyInterestRate = 0.016;
    const total = shoppingTotal * (1 + monthlyInterestRate * numberOfMonths);
    const monthly = total / numberOfMonths;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(total.toFixed(2));
  };

  return (
    <div id="financeSection">
      <div id="financeDiv">
        <img id="financeImage" src={Finance} alt="coins" />
        <h1 id="financeHeading">Financing</h1>
      </div>

      <div id="financeParagraphs">
        <p>
          At Famous Guitar Clothing, we understand that sometimes our customers need a little extra help when it comes
          to financing their purchases. <br />
          That's why we offer flexible finance options and monthly repayments on all products. <br /><br />
          To find out if your purchase is eligible and to see how much your monthly repayments would be, simply use
          our finance calculator below.<br /><br />
          It's easy to use - just input the value of the products you want to purchase and the number of months you'd
          like to spread your payments over,
          and we'll provide you with a monthly repayment amount.
        </p>
        <br />

        <p id="financeDisclaimer">
          Please note that all purchases made through financing will be subject to a 19.2% annual interest rate. <br />
          Additionally, financing options are subject to credit checks to ensure eligibility.
        </p>
      </div>

      <div id="interestCalculator">
        <h2>FINANCE CALCULATOR</h2>
        <div id="interestInput">
          <label className="inputItems">
            Total Shopping Value: <input id="shoppingTotal" type="number" placeholder="Enter Total (£)" onChange={handleInput} />
          </label>
          <br />
          <label className="inputItems">
            Number of months: <input id="numberOfMonths" type="number" placeholder="Enter Months" onChange={handleInput} />
          </label>
          <br />
        </div>
        <button id="interestButton" onClick={calculatePayment}>
          Calculate
        </button>
        <br />
        <hr />
        <UserInput monthly={monthlyPayment} total={totalPayment} />
      </div>
    </div>
  );
};

export default InterestCalculator;
