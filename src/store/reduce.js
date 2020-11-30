import * as ActionsTypes from './actions'

const initialstate = {
    counter:0,
    storeResults: []
}

const reducer = (state = initialstate , action ) => {
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
        case ActionsTypes.STORE_RESULT: 
              const obj ={ id: new Date() , val :state.counter }
                return{
                    ...state,
                    storeResults : [...state.storeResults ,obj ]
                }
        case ActionsTypes.DELETE_RESULT :
             const updateArray = state.storeResults.filter(item => item.id !== action.ResultId) ;
             return {
                 ...state ,
                 storeResults : updateArray
             }
        default :
            return state ;
    }
    
}

export default reducer