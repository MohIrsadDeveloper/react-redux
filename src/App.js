import React, { useContext } from 'react'
import { StateContext } from '.'

const App = () => {
  const state = useContext(StateContext)
  console.log(state);
  state.subscribe(() => {
    console.log(state.getState());
  })
  state.dispatch({
    type : "GOODMORNING",
    data : "Kulsum Aapa"
  })
  return (
    <div>App</div>
  )
}

export default App