/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-12 16:06:47
 * @LastEditors: wc
 * @LastEditTime: 2022-09-13 11:24:58
 */
import React, { PureComponent } from "react"
import { Link, Outlet } from "react-router-dom"

export class Home extends PureComponent {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Link to="/user"> to user</Link>
        <br />
        <Link to="/home/nav">Home Nav</Link>
        <br />
        <Link to="/home/tab">Home Tab</Link>
        <br />
        <Outlet />
      </>
    )
  }
}

export default Home
