/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-02 15:21:06
 * @LastEditors: wc
 * @LastEditTime: 2022-09-02 23:54:02
 */

import React, { useContext } from "react"

import Context from "./context"

function HomeInfo() {
  const context = useContext(Context)
  return (
    <div>
      <h1>HomeInfo</h1>
      <h2>{context.title}</h2>
      <h2>{context.age}</h2>
    </div>
  )
}

export default HomeInfo
