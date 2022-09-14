/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-13 15:38:11
 * @LastEditors: wc
 * @LastEditTime: 2022-09-14 15:15:21
 */
import React, { memo, useEffect, useState } from "react"

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("text")

  useEffect(() => {
    document.title = message
    console.log("开启监听")

    return () => {
      console.log("取消监听")
    }
  })

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
