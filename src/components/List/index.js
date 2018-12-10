import React from 'react'
import {connect} from 'react-redux'
import { toggleList } from '../../redux-flow/reducers/todos-list/action-creators'

const List = ({todos, handleToggleList , activeFilter}) => (
    <div className="list">
    <ul>
        {getVisibleTodos(todos, activeFilter).map((element) => (
            <li key={element.id}
             style ={{textDecoration: element.completed ? 'line-through': 'none'}}
             onClick={handleToggleList(element.id)}
             >{element.text}</li>
        ))}
   </ul>
</div>
)

const getVisibleTodos = (todos, activeFilter) => {

    const filteritems = {
        ['SHOW_ALL']: todos,
        ['SHOW_COMPLETED']: todos.filter((todo) => todo.completed),
        ['SHOW_ACTIVE']: todos.filter((todo) => !todo.completed)
    }

    return filteritems[activeFilter]
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    activeFilter: state.filter
})

const mapDispacthToProps =  (dispacth) => ({
    handleToggleList: (id) => (e) => {
        console.log(id)
        dispacth(toggleList(id))
    }
}) 

export default connect(mapStateToProps, mapDispacthToProps)(List)