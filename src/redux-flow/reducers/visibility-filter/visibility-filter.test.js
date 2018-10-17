import visibilityFilter from './index'
import {expect} from 'chai'
import deepFreeze from 'deep-freeze'

it('visibilty filter should be a function', () => {
    expect(visibilityFilter).to.be.a('function')
})

it('should show all list', () => {
    const before= 'SHOW_COMPLETED'
    const action = deepFreeze({
        type: 'SET_VISIBILITY_FILTER',
        payload: {filter: 'SHOW_ALL'}
    })
    const after = 'SHOW_ALL'
    expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just completed list', () => {
    const before= 'SHOW_ALL'
    const action = deepFreeze({
        type: 'SET_VISIBILITY_FILTER',
        payload: {filter: 'SHOW_COMPLETED'}
    })
    const after = 'SHOW_COMPLETED'
    expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just active list', () => {
    const before= 'SHOW_ALL'
    const action = deepFreeze({
        type: 'SET_VISIBILITY_FILTER',
        payload: {filter: 'SHOW_ACTIVE'}
    })
    const after = 'SHOW_ACTIVE'
    expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show last state', () => {
    const before= 'SHOW_ACTIVE'
    const action = deepFreeze({
        type: 'UNKNOWN'
    })
    const after = 'SHOW_ACTIVE'
    expect(visibilityFilter(before, action)).to.be.equal(after)
})


it('should show initial state', () => {
    const before= undefined
    const action = deepFreeze({})
    const after = 'SHOW_ALL'
    expect(visibilityFilter(before, action)).to.be.equal(after)
})