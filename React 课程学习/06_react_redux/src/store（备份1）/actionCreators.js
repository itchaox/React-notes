/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:19:06
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 15:38:51
 */
import { CHANGE_COUNT, CHANGE_LIST } from "./constants"
import axios from "axios"

export const changeCountAction = number => ({ type: CHANGE_COUNT, number })

export const changeList = list => ({
  type: CHANGE_LIST,
  list,
})

export const userAction = () => {
  // 异步操作, 网络请求
  return (dispatch, getState) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const list = res.data.data.banner.list
      dispatch(changeList(list))
    })
  }
}
