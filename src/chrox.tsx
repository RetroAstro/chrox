import * as React from 'react'

type ProviderProps = {
  children: React.ReactNode
}

type ContextProps = {
  state?: object
  dispatch?: (prop: object) => void
}

export default function createChrox (
  reducer: (state: object, action: object) => object, 
  initialState: object
) {
  const Context = React.createContext<ContextProps>({})

  const Provider: React.FC<ProviderProps> = props => {
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
