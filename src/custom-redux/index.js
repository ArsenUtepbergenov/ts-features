import { createStore } from './createStore'
import { rootReducer } from './redux'
import { increment, decrement } from './actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
// const asyncBtn = document.getElementById('async')
// const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, { counter: 0 })

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' })
