import { Counter } from "./Counter"
import "./styles.css"

import State from "./state"
import { TAppState } from "./types"
import { useCounter } from "./hooks/useCounter"
import { useInput } from "./hooks/useInput"

const state = new State<TAppState>({
  count: 0,
  name: ""
})

export default function App() {
  const { handleClick } = useCounter(state)
  const { appState, handleInput } = useInput(state)

  return (
    <div className="App">
      <h1>Написать свой стейт менеджер</h1>
      <ul style={{ textAlign: "left" }}>
        <li>
          Написать базовый/простой стейт менеджер, который может работать
          независимо от React
        </li>
        <li>Написать хуки для React для работы с этим стейт менеджером</li>
        <li>
          Связать кнопку со счетчиком (подписка для кнопки должна быть вне
          React)
        </li>
        <li>+ поддержка Typescript</li>

        <hr />

        <pre>{`count из react state: ${appState.count}`}</pre>

        <pre>{`count из new State: ${state.getState().count}`}</pre>

        <button
          title="Left Click: Increment, Right Click: Decrement"
          onClick={handleClick}
          onContextMenu={handleClick}
        >
          {"+ / -"}
        </button>

        <hr />

        <pre>{`name из react state: ${appState.name}`}</pre>

        <pre>{`name из new State: ${state.getState().name}`}</pre>

        <input
          value={appState.name}
          onChange={handleInput}
        >
        </input>
      </ul>
      <Counter state={state} handleClick={handleClick} />
    </div>
  )
}
