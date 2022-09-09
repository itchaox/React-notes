/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-09 22:40:23
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 22:43:30
 */
import { CHANGE_COUNT } from "./constants"

const initState = {
  count: 0,
}

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, count: state.count + action.number }
    default:
      return state
  }
}

export default reducer
