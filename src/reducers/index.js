import loginReducer from './loginReducer';
import rentCarReducer from './rentCarReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	loginReducer,
	rentCarReducer
});

export default rootReducer;