/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-06 15:04:07
 * @LastEditors: wc
 * @LastEditTime: 2022-09-06 15:25:31
 */
import React, { PureComponent } from "react"

import { AppStyle } from "./style"

export class App extends PureComponent {
  render() {
    return (
      <AppStyle>
        <h1 className="header">学习 CSS in JS</h1>
        <h1 className="footer">练习中</h1>
      </AppStyle>
    )
  }
}

export default App
