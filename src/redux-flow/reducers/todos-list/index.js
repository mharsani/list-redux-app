
import {ADD_TODO,TOGGLE_TODO} from './actions'

 const List  = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO :
        return state.concat({
            id: action.payload.id,
            text: action.payload.text,
            completed: false

        })
        case TOGGLE_TODO :
        return state.map((x) => {
            if(x.id !== action.payload.id) {
                return x
            }
            return {
                ...x,
                completed: !x.completed
            }
        })
    }
    return state
}

 export default List