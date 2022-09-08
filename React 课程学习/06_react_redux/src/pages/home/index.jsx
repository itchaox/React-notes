import React, { useState } from "react"
import store from "../../store"
import { changeCountAction } from "../../store/actionCreators.js"

function Home() {
  const [count, setCount] = useState(0)

  store.subscribe(() => {
    setCount(store.getState().count)
  })

  return (
    <>
      <h1>Home count: {count} </h1>
      <button onClick={() => store.dispatch(changeCountAction(1))}>+1</button>
      <button onClick={() => store.dispatch(changeCountAction(5))}>+5</button>
    </>
  )
}

export default Home
