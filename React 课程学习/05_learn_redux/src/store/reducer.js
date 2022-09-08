/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 10:15:21
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 12:01:03
 */

const CHANGE_NAME = require("./constants")

const initState = {
  name: "itchao",
  age: 18,
  height: 1.85,
}

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    default:
      return state
  }
}

module.exports = reducer
