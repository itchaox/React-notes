/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-06 11:51:49
 * @LastEditors: wc
 * @LastEditTime: 2022-09-06 11:54:00
 */
import React, { PureComponent } from "react"
import "./style.css"

export class APP extends PureComponent {
  render() {
    return (
      <>
        <h1 className="foo">普通 CSS</h1>
        <h1>样式练习</h1>
      </>
    )
  }
}

export default APP
