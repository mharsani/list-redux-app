import React from 'react'

const SearchCep = ({address, city, code, district, state, handleSubmit, isFatching}) => (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='cep' disabled={isFatching}/>
                <button type='submit' disabled={isFatching}>Buscar endereco</button>
        </form>
        <div>
       <div>
           {address}
       </div>
       <div>
           {city}
       </div>
       <div>
           {code}
       </div>
       <div>
           {district}
       </div>
       <div>
           {state}
       </div>
    </div>
    </div>
    
)

export default SearchCep