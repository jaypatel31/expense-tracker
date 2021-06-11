import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

// Intial State
const initalState = {
	transaction: [],
}

if(localStorage.getItem('transaction')){
	initalState.transaction = JSON.parse(localStorage.getItem('transaction'));
}


// Create Context
export const GlobalContext = createContext(initalState);

//Provider Component
export const GlobalProvider = ({children}) =>{
	const [state, dispatch] = useReducer(AppReducer, initalState)

	//Actions

	const deleteTransation = (id) => {
		dispatch({
			type:"DELETE_TRANSACTION",
			payload:id
		})
	}

	const addTransaction = (transaction) => {
		dispatch({
			type:"ADD_TRANSACTION",
			payload:transaction
		})
	}

	useEffect(() => {
		localStorage.setItem('transaction', JSON.stringify(state.transaction));
	}, [state])

	return (<GlobalContext.Provider value={{transaction:state.transaction,deleteTransation,addTransaction}}>
		{children}
	</GlobalContext.Provider>);
}