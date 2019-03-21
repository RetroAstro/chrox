# Chrox
> State with hooks, simple but exquisite.

## Installation

```
npm i chrox -S
```

## Example

Write your reducer and initial state.

```js
// reducer.js
export const initialState = {
  count: 0
}

export const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return { ...state }
  }
}
```

Then we can make our own counter with no effort.

```jsx
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
```

**Note :**  

Since our state and dispatch are separated, we can easily get the performance optimization.

## License

MIT © [RetroAstro](https://github.com/RetroAstro)

