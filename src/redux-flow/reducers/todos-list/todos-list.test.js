'use strict'

import List from './index'
import {expect} from 'chai'
import deepFreeze from 'deep-freeze'
import {ADD_TODO,TOGGLE_TODO} from './actions'

it('should be a function', () => {
   expect(List).to.be.a('function')
})

it('Should add an element to List', () => {
    const before = deepFreeze([])
    const action = deepFreeze({
       type: ADD_TODO,
       payload: {
           id: 0,
           text: 'Ola'
       }
    })
    const after = [{id: 0, text: 'Ola', completed: false}]
    expect(List(before, action)).to.be.deep.equal(after)
})

it('Should add an other element to List', () => {
  const before = deepFreeze([{id: 0, text: 'Ola', completed: false}])
  const action = deepFreeze({
      type: ADD_TODO,
      payload: {
          id: 1,
          text: 'teste'
        }
  })
  const after = 
    [{id: 0, text: 'Ola', completed: false},
    {id: 1, text: 'teste', completed: false}  
    ]
    expect(List(before, action)).to.be.deep.equal(after)
})

it('Should add toogleElement', () => {
    const before = deepFreeze( [{id: 0, text: 'Ola', completed: false},
    {id: 1, text: 'teste', completed: false}  
    ])
    const action = deepFreeze({
        type: TOGGLE_TODO,
        payload: {
            id: 1
        }
    })
    const after  = [
        {id: 0, text: 'Ola', completed: false},
        {id: 1, text: 'teste', completed: true}
    ]
    expect(List(before, action)).to.be.deep.equal(after)
})

it('Should add toogleElement', () => {
    const before = deepFreeze( [{id: 0, text: 'Ola', completed: false},
    {id: 1, text: 'teste', completed: false}  
    ])
    const action = deepFreeze({
        type: TOGGLE_TODO,
        payload: {
            id: 0
        }
    })
    const after  = [
        {id: 0, text: 'Ola', completed: true},
        {id: 1, text: 'teste', completed: false}
    ]
    expect(List(before, action)).to.be.deep.equal(after)
})

it('Should return a state', () => {
    const before = deepFreeze([{id: 0, text: 'Ola', completed: false}])
    const action = deepFreeze({
        type: 'UNKOWN'
    }) 
    const after  =  [{id: 0, text: 'Ola', completed: false}];
    expect(before, action).to.be.deep.equal(after)
})


it('should return initialState when state before is undefined', () => {
    const before = undefined
    const action = deepFreeze({})
    const after = []
    expect(List(before, action)).to.be.deep.equal(after)
  })
