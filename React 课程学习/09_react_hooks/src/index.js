/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-13 15:38:11
 * @LastEditors: wc
 * @LastEditTime: 2022-09-14 16:52:43
 */
import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App"

import App from "./05_useContext 使用/App"
import { userContext } from "./05_useContext 使用/context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <userContext.Provider value={{ name: "itchao", age: 18, height: 1.85 }}>
      <App />
    </userContext.Provider>
  </>
)
