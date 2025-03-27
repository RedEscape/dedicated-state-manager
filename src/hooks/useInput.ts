import { SyntheticEvent, useEffect, useState } from "react"
import { TAppState } from "../types"
import State from "../state"

export const useInput = (state: State<TAppState>) => {
  const [appState, setAppState] = useState(state.getState())

  useEffect(() => {
    const listener = (state: TAppState) => {
      setAppState(state)
    }

    state.subscribe(listener)

    return () => {
      state.unsubscribe(listener)
    }
  }, [])

  const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    state.setState({ ...state.getState(), name: newValue })
  }

  return {
    handleInput,
    appState
  }
}
