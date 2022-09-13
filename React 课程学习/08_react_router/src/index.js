/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-12 14:33:01
 * @LastEditors: wc
 * @LastEditTime: 2022-09-12 15:18:23
 */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
