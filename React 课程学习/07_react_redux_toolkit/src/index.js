/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-10 22:51:28
 * @LastEditors: wc
 * @LastEditTime: 2022-09-11 14:29:18
 */
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import store from "./store"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
