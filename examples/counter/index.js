import React, { useContext } from 'react'
import { render } from 'react-dom'
import createChrox from 'chrox'
import { countReducer, initialState } from './reducer'

const { Context, Provider } = createChrox(countReducer, initialState)

const Status = () => {
  const state = useContext(Context.state)
  return (
    <span>{state.count}</span>
  )
}

const Decrement = () => {
  const dispatch = useContext(Context.dispatch)
  return (
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  )
}

const Increment = () => {
  const dispatch = useContext(Context.dispatch)
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  )
}

const App = () => (
  <>
    <Decrement />
    <Status />
    <Increment />
  </>
)

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
