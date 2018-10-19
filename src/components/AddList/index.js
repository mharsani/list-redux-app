import React from 'react'
import {connect} from 'react-redux'
import { addList } from '../../redux-flow/reducers/todos-list/action-creators'

export const Form = ({handleSubmite}) => (
    <form onSubmit={handleSubmite}>
        <input type="text" name="inputlist"/>
        <button>
            ADD-LIST   
        </button>   
    </form>
)

const mapDispacthToProps =  (dispacth) => ({
    handleSubmite: (e) => {
        e.preventDefault()
        dispacth(addList(e.target.inputlist.value))
        e.target.inputlist.value = ''
    }
})


export default connect(null, mapDispacthToProps)(Form)