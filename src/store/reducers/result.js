import * as ActionsTypes from '../actions';


const initialstate = {
  storeResults: []
}

const reducer = (state = initialstate , action ) => {
    switch(action.type){
        case ActionsTypes.STORE_RESULT: 
              const obj ={ id: new Date() , val :action.result }
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

export default reducer ;