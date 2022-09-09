/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-09 22:40:25
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 22:43:14
 */
import { CHANGE_LIST } from "./constants"

const initState = {
  list: [
    {
      acm: 1,
      title: "123",
    },
    {
      acme: 2,
      title: "assasadad",
    },
  ],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_LIST:
      return { ...state, list: action.list }
    default:
      return state
  }
}

export default reducer
