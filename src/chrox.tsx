import * as React from 'react'

type ProviderProps = {
  children: React.ReactNode
}

export default function createChrox (
  reducer: (state: object, action: object) => object, 
  initialState: object
) {
  const StateContext = React.createContext<object>({})
  const DispatchContext = React.createContext<React.Dispatch<object>>(() => {})

  const Provider: React.FC<ProviderProps> = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
      <DispatchContext.Provider value={dispatch}>
         <StateContext.Provider value={state}>
            {props.children}
         </StateContext.Provider>
      </DispatchContext.Provider>
    )
  }

  const Context = {
    state: StateContext,
    dispatch: DispatchContext
  }

  return {
    Context,
    Provider
  }
}
