import { SyntheticEvent, useEffect, useReducer } from "react"
import { TAppState } from "../types"
import State from "../state"

export const useCounter = (state: State<TAppState>) => {
  const [, forceUpdate] = useReducer(b => !b, true)

  useEffect(() => {
    const listener = () => forceUpdate()

    state.subscribe(listener);

    return () => {
      state.unsubscribe(listener)
    }
  }, [])

  const handleClick = (e: SyntheticEvent | PointerEvent) => {
    e.preventDefault()
    if (e.type === 'click') {
      state.setState({ ...state.getState(), count: state.getState().count + 1 })

    } else if (e.type === 'contextmenu') {
      state.setState({ ...state.getState(), count: state.getState().count - 1 })
    }
  }

  return {
    handleClick,
  }
}
