import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFundActionCreator, withdrawFundActionCreator } from './redux/actionCreator';

const App = () => {

  let state = useSelector((store) => {
    return store;
  })

  const dispatch = useDispatch();

  const addFund = () => {
    let amount = parseInt(prompt("Enter Amount to Add"))
    // alert(amount)

    dispatch(addFundActionCreator(amount))
  }

  const withdrawFund = () => {
    let amount = parseInt(prompt("Enter Amount to Width"))
    // alert(amount)
    dispatch(withdrawFundActionCreator(amount))
  }


  return (
    <div>
      <h1>Welcome to Fund Management Using Redux</h1>
      <h1>Total Amount Left : {state} </h1>
      <button onClick={addFund}>Add Fund</button>
      <button onClick={withdrawFund}>Withdraw Fund</button>
    </div>
  )
}

export default App