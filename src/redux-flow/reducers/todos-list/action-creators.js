
import {ADD_TODO, TOGGLE_TODO} from './actions'
import v4 from 'uuid-v4'

export const addList = (text) => ({
    type: ADD_TODO,
    payload: { id: v4(), text}
})

export const toggleList = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
})

