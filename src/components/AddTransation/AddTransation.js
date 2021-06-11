import React, {useContext, useState} from 'react'
import {GlobalContext} from "../../context/GlobalState"




function AddTransation() {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const {addTransaction} = useContext(GlobalContext)

	const submitHandler = (e) =>{
		e.preventDefault();
		let obj = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount:Number(amount)
		}
		addTransaction(obj);
		setText("");
		setAmount(0);
	}


	return (
		<>
		<h3>Add new transaction</h3>
		<form id="form" onSubmit={(e)=>submitHandler(e)}>
			<div className="form-control">
				<label htmlFor="text">Text</label>
				<input type="text" onChange={(e)=>setText(e.target.value)} value={text}  placeholder="Enter text..." />
			</div>
			<div className="form-control">
				<label htmlFor="amount"
					>Amount <br />
					(negative - expense, positive - income)
				</label>
				<input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder="Enter amount..." />
			</div>
			<button className="btn">Add transaction</button>
		</form>
		</>
	)
}

export default AddTransation