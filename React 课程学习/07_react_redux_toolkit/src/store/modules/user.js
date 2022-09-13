/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-11 18:28:57
 * @LastEditors: wc
 * @LastEditTime: 2022-09-12 14:24:31
 */
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [
      {
        acm: "111",
        title: "itchao",
      },
    ],
  },
  reducers: {
    changeList(state, { payload }) {
      state.list = payload
    },
  },
})

export const { changeList } = userSlice.actions
export default userSlice.reducer
