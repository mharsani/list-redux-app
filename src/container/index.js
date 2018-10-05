import React from 'react'
import {connect} from 'react-redux'
import { ADD_TODO } from '../redux-flow/reducers/todos-list/actions';
import v4 from 'uuid-v4'

const AppContainer = ({handleSubmite, todos}) => (
    <div className="container">
        <div className="container">
        <form onSubmit={handleSubmite}>
            <input type="text" name="inputlist"/>
            <button>
                ADD-LIST   
            </button>   
        </form>
        <div className="list">
        <ul>
            {todos.map((element, index) => (
                <li key={index}>{element.text}</li>
            ))}
       </ul>
    </div>
    </div>
    </div>
)
const mapStateToProps = (state) => ({
    todos: state
})

const mapDispacthToProps = (dispacth) => ({
    handleSubmite: (e) => {
        e.preventDefault()
        dispacth({
            type: ADD_TODO,
            payload: {
                id: v4(),
                text: e.target.inputlist.value
            }
        })
    }
})


export default connect(mapStateToProps, mapDispacthToProps)(AppContainer)