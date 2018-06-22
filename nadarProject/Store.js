import { createStore } from 'redux'
import { Camera, Permissions } from 'expo';


const initialState = {
    loading: true,
    url: '',
}

const reducer = (state=initialState, action) => {
	if (action.type === 'FONT_LOADED')    
		return {
			...state,
			loading: false,
		}
	if (action.type === 'PIC_URL')    
		return {
			...state,
			url: action.url,
		}
	return state 
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store