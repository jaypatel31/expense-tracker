export default (state, action) => {
	console.log(state);
	switch(action.type){
		case "DELETE_TRANSACTION":
			return {
				...state,
				transaction:state.transaction.filter(transacti => transacti.id !== action.payload)
			}
		case "ADD_TRANSACTION":
			return {
				...state,
				transaction:[action.payload, ...state.transaction]
			}
		default:
			return state;
	}
}