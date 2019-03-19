import React, { useContext } from 'react'
import { render } from 'react-dom'
import createChrox from '../../dist/chrox'
import { countReducer, initialState } from './reducer'

const { Context, Provider } = createChrox(countReducer, initialState)

const Decrement = ({ context }) => {
  const { dispatch } = useContext(context)
  return (
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  )
}

const Increment = ({ context }) => {
  const { dispatch } = useContext(context)
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  )
}

const App = () => {
  const { state } = useContext(Context)

  return (
   <>
     <Decrement context={Context} />
     <span>{state.count}</span>
     <Increment context={Context} />
   </>
  )
}

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
