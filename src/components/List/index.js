import React from 'react'
import {connect} from 'react-redux'
import { toggleList } from '../../redux-flow/reducers/todos-list/action-creators'

const List = ({todos, handleToggleList }) => (
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
)

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispacthToProps =  (dispacth) => ({
    handleToggleList: (id) => (e) => {
        console.log(id)
        dispacth(toggleList(id))
    }
}) 

export default connect(mapStateToProps, mapDispacthToProps)(List)