/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:13:27
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 14:46:44
 */
import { CHANGE_COUNT, CHANGE_LIST } from "./constants"

const initState = {
  count: 0,
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
    case CHANGE_COUNT:
      return { ...state, count: state.count + action.number }
    case CHANGE_LIST:
      return { ...state, list: action.list }
    default:
      return state
  }
}

export default reducer
