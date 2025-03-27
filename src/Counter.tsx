import React, { useEffect } from "react"
import { TAppState } from "./types"
import State from "./state"

export const Counter: React.FC<{ state: State<TAppState>, handleClick: (e: PointerEvent) => void }> = ({ state, handleClick }) => {

  useEffect(() => {
    const el = document.querySelector("#button")

    const listener = (e: Event) => {
      if (e instanceof PointerEvent) {
        handleClick(e)
      }
    }

    el!.addEventListener("click", listener)

    return () => {
      el!.removeEventListener("click", listener)
    }

  }, [])


  return <div style={{ marginTop: 100 }}>Counter из независимого new State: {state.getState().count}</div>
}
