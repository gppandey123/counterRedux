import * as ActionsTypes from '../actions'


const initialstate = {
    counter:0
   
}

const  reducer= (state = initialstate , action ) => {
    switch(action.type){
        case ActionsTypes.INCREAMENT :
            return{
                ...state,
                counter : state.counter+1
            }
        case ActionsTypes.DECREAMENT :
            return {
                ...state,
                counter : state.counter - 1
            }
        case ActionsTypes.ADD : 
            return {
                ...state ,
                counter : state.counter + action.value
            }
        case ActionsTypes.SUBSTRACT : 
            return {
                ...state ,
                counter : state.counter - action.payload.value
            }
        default :
            return state ;
    }
    
}

export default reducer;