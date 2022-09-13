/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-12 14:33:01
 * @LastEditors: wc
 * @LastEditTime: 2022-09-13 11:23:33
 */
import React, { PureComponent } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import HomeNav from "./pages/Home/HomeNav"
import HomeTab from "./pages/Home/HomeTab"
import HomeDetail from "./pages/Home/HomeDetail"

export class App extends PureComponent {
  render() {
    return (
      <>
        <div>header</div>
        <hr />
        <div>
          content
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/tab" />}></Route>
              <Route path="/home/nav" element={<HomeNav />} />
              <Route path="/home/tab" element={<HomeTab />} />
            </Route>
            <Route path="/detail/:id" element={<HomeDetail />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <hr />
        <div>footer</div>
      </>
    )
  }
}

export default App
