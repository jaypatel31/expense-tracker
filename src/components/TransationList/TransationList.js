import React, {useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"
import Transaction from "../Transaction/Transaction"

function TransationList() {
	const {transaction} = useContext(GlobalContext)
	console.log(transaction);
	return (
		<>
		<h3>History</h3>
	      <ul id="list" className="list">
	      	{
	      		transaction.map((item,index) => (<Transaction key={index} item={item}/>))
	      	}
	         
	      </ul>
      </>
	)
}

export default TransationList