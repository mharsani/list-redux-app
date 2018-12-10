import React from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../redux-flow/reducers/visibility-filter/action-creators'
import FilterLink from './filterLink'

export const Filter = ({activeFilter, handleFilter}) =>  (
    <div>
       {filterItems.map((item)=> (
         <FilterLink 
         key={item.action}
         action={item.action}
         activeFilter={activeFilter}
         onClick={handleFilter(item.action)}
         >
            {item.label}
         </FilterLink>
       ))}
    </div>
)
const mapDispacthToProps  = (dispatch) => ({
   handleFilter: (filter) => (e) => {
       e.preventDefault()
       dispatch(setVisibilityFilter(filter))
   }
})

const filterItems = [{label: 'Todos', action: 'SHOW_ALL'}, {label: 'Finalizados', action: 'SHOW_COMPLETED'},{label: 'A fazer', action: 'SHOW_ACTIVE'}]

const mapStateToProps = (state) => ({
 activeFilter: state.filter
})

export default connect(mapStateToProps, mapDispacthToProps)(Filter)

