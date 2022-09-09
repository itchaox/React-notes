/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-09 22:39:33
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 22:40:04
 */
import { CHANGE_LIST } from "./constants"
import axios from "axios"

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
