import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import *  as ActionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.OnIncreamentCounter} />
                <CounterControl label="Decrement" clicked={this.props.OnDecreamentCounter}  />
                <CounterControl label="Add 5" clicked={this.props.OnAddIncrement}  />
                <CounterControl label="Subtract 5" clicked={this.props.OnSubDecrement}  />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>show Result</button>
                <ul>
                    {this.props.store.map(store => {
                        return (
                            <li key={store.id} onClick={() =>this.props.onDeleteResults(store.id)}>
                                {store.val}
                                </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        store : state.res.storeResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnIncreamentCounter : () => dispatch({type:ActionTypes.INCREAMENT}),
        OnDecreamentCounter: () => dispatch({type:ActionTypes.DECREAMENT}),
        OnAddIncrement : () => dispatch({type:ActionTypes.ADD , value:5}),
        OnSubDecrement : () => dispatch({type:ActionTypes.SUBSTRACT ,payload: {value:5 }}),
        onStoreResults : (Result) => dispatch({type:ActionTypes.STORE_RESULT , result:Result}),
        onDeleteResults : (id) => dispatch({type:ActionTypes.DELETE_RESULT  ,ResultId:id})
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);