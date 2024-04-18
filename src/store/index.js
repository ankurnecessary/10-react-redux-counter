import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return { ...state, counter: ++state.counter }
  }

  if (action.type === 'decrement') {
    return { ...state, counter: --state.counter }
  }

  return state
}

const store = createStore(counterReducer)

export default store
