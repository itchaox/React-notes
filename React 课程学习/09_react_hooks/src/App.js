import React, { memo, useState } from "react"

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("text")

  return (
    <>
      <h1>App memo hooks play!</h1>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <h2>message: {message}</h2>
      <button onClick={() => setMessage(message + "修改了文本")}>
        change text
      </button>
    </>
  )
})

export default App
