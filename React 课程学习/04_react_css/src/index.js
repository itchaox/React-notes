/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-06 10:26:19
 * @LastEditors: wc
 * @LastEditTime: 2022-09-06 15:06:27
 */
import React from "react"
import ReactDOM from "react-dom/client"

// import App from "./01_内联样式/App"
// import App from "./02_普通 CSS/APP.jsx"
import App from "./05_CSS-in-JS/App.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
