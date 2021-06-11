import React, {useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"


function IncomeExpenses() {
  const {transaction} = useContext(GlobalContext)

  const amounts = transaction.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  console.log(income, expense)

	return (

	   <div className="inc-exp-container">
        <div  className="money plus">
          <h4>Income</h4>
          <p >{income}</p>
        </div>
        <div  className="money minus">
          <h4>Expense</h4>
          <p >{expense}</p>
        </div>
      </div>

	)
}

export default IncomeExpenses