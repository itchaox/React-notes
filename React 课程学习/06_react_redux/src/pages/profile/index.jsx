/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:03:03
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 22:39:12
 */
import React, { useState } from "react"
import store from "../../store"
import { changeCountAction } from "../../store/actionCreators"

function Profile() {
  const [count, setCount] = useState(0)

  store.subscribe(() => {
    setCount(store.getState().count)
  })

  return (
    <>
      <h1>Profile count: {count} </h1>
      <button onClick={() => store.dispatch(changeCountAction(-1))}>-1</button>
      <button onClick={() => store.dispatch(changeCountAction(-5))}>-5</button>
    </>
  )
}

export default Profile
