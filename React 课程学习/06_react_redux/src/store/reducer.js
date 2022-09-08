/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:13:27
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 22:33:08
 */
import { CHANGE_COUNT } from "./constants"

const initState = {
  count: 0,
}

function reducer(state = initState, action) {
  console.log(state.count + action.number)
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, count: state.count + action.number }
    default:
      return state
  }
}

export default reducer
