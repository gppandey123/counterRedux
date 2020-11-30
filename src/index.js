import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore , combineReducers} from 'redux';
// import reducer from './store/reduce';
import Counter from './store/reducers/counter';
import Result from './store/reducers/result'

const reducers = combineReducers({
        ctr : Counter , 
        res : Result
})

// const store = createStore(reducer);

const store = createStore(reducers);

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));

