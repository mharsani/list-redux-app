import reducerList from './todos-list'
import reducerFilter  from './visibility-filter'
import {combineReducers } from 'redux'

export default combineReducers({
    todos: reducerList,
    filter: reducerFilter
})