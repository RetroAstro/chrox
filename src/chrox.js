import * as React from 'react'

export default function createChrox (reducer, initialState) {
  const Context = React.createContext(null)

  const Provider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
      <Context.Provider value={{ state, dispatch }}>
        {props.children}
      </Context.Provider>
    )
  }

  return {
    Context,
    Provider
  }
}
