
class State<T> {
  private state: T

  constructor(value: T) {
    this.state = value
  }

  listeners: ((state: T) => void)[] = []

  getState = () => this.state
  setState = (state: T) => {
    this.state = state;
    this.listeners.forEach((fn) => fn(this.state))
  };

  subscribe(fn: (state: T) => void) {
    this.listeners.push(fn)

    console.log(this.listeners)
  }

  unsubscribe(fn: (state: T) => void) {
    this.listeners = this.listeners.filter((el) => el !== fn)
  }
}

export default State
