const visibilityFilter = (state = 'SHOW_ALL', action) => {
    if(action.type === 'SET_VISIBILITY_FILTER') {
        return action.payload.filter
    }
    return state
} 

export default visibilityFilter