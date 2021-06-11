import React, {useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"

function Transaction({item}) {
	const sign = item.amount < 0 ? '-' : '+';
	const {deleteTransation} = useContext(GlobalContext)

	return (
		<li className={(item.amount < 0)?"minus":"plus"}>
			{item.text} <span>{sign}${Math.abs(item.amount)}</span>
			<button onClick={()=>deleteTransation(item.id)} className="delete-btn">x</button>
		</li> 
	)
}

export default Transaction