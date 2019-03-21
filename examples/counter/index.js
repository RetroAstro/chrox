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

const Decrement = ({ context }) => {
  const dispatch = useContext(context)
  return (
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  )
}

const Increment = ({ context }) => {
  const dispatch = useContext(context)
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  )
}

const App = () => (
  <>
    <Decrement context={Context.dispatch} />
    <Status />
    <Increment context={Context.dispatch} />
  </>
)

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
