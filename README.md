# Chrox
> State with hooks, simple but exquisite.

## Installation

```
npm install chrox
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

```js
import React, { useContext } from 'react'
import { render } from 'react-dom'
import createChrox from 'chrox'
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
```

## License

MIT © [RetroAstro](https://github.com/RetroAstro)

