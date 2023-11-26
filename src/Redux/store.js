import { createStore, combineReducers } from 'redux';
import codeReducer from './reducers/codeReducer';

const rootReducer = combineReducers({
  code: codeReducer,
});

const store = createStore(rootReducer);

export default store;
