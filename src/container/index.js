import React from 'react'
import Form from "../components/AddList"
import List from "../components/List"
import Filter from "../components/Filter"

const AppContainer = () => (
    <div className="container">
        <div className="container">
        <Form />
        <List />
        <Filter />
    </div>
    </div>
)


export default AppContainer