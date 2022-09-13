/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-12 22:17:21
 * @LastEditors: wc
 * @LastEditTime: 2022-09-12 22:31:03
 */
import React, { PureComponent } from "react"
import { Link } from "react-router-dom"

export class User extends PureComponent {
  render() {
    return (
      <>
        <h1>User page</h1>
        <Link to="/home"> to home</Link>
      </>
    )
  }
}

export default User
