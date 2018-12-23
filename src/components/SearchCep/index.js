import React, {PureComponent} from 'react'
import SearchCep from './search-cep'
import axios from 'axios';


class searchCepContainer extends PureComponent {
    state = {
        address: '',
        city: '',
        code: '',
        district: '',
        state: '',
        state: 1,
        isFatching: false
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({isFatching: true})
        const valueForm = e.target.cep.value
        await axios.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${valueForm}`)
        .then(res => {
          this.setState(res.data);
        })
        this.setState({isFatching: false})
    }
    render() {
        return (
            <SearchCep {...this.state}
            handleSubmit={this.handleSubmit}/>
        )
    }
}

export default searchCepContainer;
