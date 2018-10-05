import React from 'react'

const AddList = ({handlerSubmit}) => (
    <div className="container" onSubmit={handlerSubmit}>
    <form>
        <input type="text"/>
        <button>
            ADD-LIST   
        </button>    
    </form>
        
    </div>
)

export default AddList