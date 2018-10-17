import React from 'react'
import {connect} from 'react-redux'
import { addList, toggleList } from '../redux-flow/reducers/todos-list/action-creators'


const AppContainer = ({handleSubmite, todos, handleToggleList}) => (
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
            {todos.map((element) => (
                <li key={element.id}
                 style ={{textDecoration: element.completed ? 'line-through': 'none'}}
                 onClick={handleToggleList(element.id)}
                 >{element.text}</li>
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
        dispacth(addList(e.target.inputlist.value))
        e.target.inputlist.value = ''
    },

    handleToggleList: (id) => (e) =>{
        dispacth(toggleList(id))
    }
})


export default connect(mapStateToProps, mapDispacthToProps)(AppContainer)