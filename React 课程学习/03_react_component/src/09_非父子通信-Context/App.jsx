/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-02 15:17:32
 * @LastEditors: wc
 * @LastEditTime: 2022-09-06 08:26:50
 */
import React from "react"

import Home from "./Home"
import Context from "./context"

function App() {
  return (
    <>
      <div>Context</div>
      <Context.Provider value={{ title: "itchao", age: 23 }}>
        <Home></Home>
      </Context.Provider>
    </>
  )
}

export default App
