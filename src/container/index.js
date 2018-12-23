import React from 'react'
import Form from "../components/AddList"
import List from "../components/List"
import Filter from "../components/Filter"
import Cep from '../components/SearchCep'

const AppContainer = () => (
    <div className="container">
    <div className="container">
        <Form />
        <List />
        <Filter />
    </div>
    <div className='container'>
        <Cep />
    </div>
    </div>
)


export default AppContainer