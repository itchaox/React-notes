/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-14 16:40:54
 * @LastEditors: wc
 * @LastEditTime: 2022-09-14 21:58:04
 */
import React, { memo, useContext } from "react"
import { userContext } from "./context"

const App = memo(() => {
  const user = useContext(userContext)

  return (
    <>
      <div>App</div>
      <h1>{user.name + "2"}</h1>
      <h1>{user.age}</h1>
    </>
  )
})

export default App
