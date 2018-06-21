import { createStore } from 'redux'

const initialState = {
    loading: true,
}

const reducer = (state=initialState, action) => {
	if (action.type === 'FONT_LOADED')    
		return {
			...state,
			loading: false,
		}
	return state 
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store