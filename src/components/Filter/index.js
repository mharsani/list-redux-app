import React from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../redux-flow/reducers/visibility-filter/action-creators'

export const Filter = ({activeFilter, handleFilter}) =>  (
    <div>
       {filterItems.map((item)=> {
           if(item.action === activeFilter) {
               return <span href='' key={item.action} style={{marginRight:10}}>{item.label}</span>
           }
           return <a href='' key={item.action} style={{marginRight:10}} onClick={handleFilter(item.action)}>{item.label}</a>
       })}
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

