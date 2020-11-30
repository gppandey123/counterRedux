const redux = require('redux');

const createStore = redux.createStore;

const istate = {
    counter:0
}

const reducer = (state = istate , action) => {
    switch(action.type){
        case 'INC' : 
             return {
                 ...state ,
                   counter : state.counter+1
             }
             break;
        case 'ADD' :
            return {
                ...state ,
                counter : state.counter + action.value
            }
            break;
      default :
          return state ;
    }
    
}

const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => {
     console.log("subscripton" , store.getState());
})

store.dispatch({type:'INC'});
store.dispatch({type:'ADD' , value:10});
console.log(store.getState());

// store.subscribe(() => {
//     return console.log("subscripton" , store.getState());
// }) it will not called because subscribe is excutes when dispatch and state change

