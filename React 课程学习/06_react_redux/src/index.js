/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 18:49:28
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 08:59:54
 */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
