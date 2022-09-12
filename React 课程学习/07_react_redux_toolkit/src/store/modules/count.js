/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-11 12:18:55
 * @LastEditors: wc
 * @LastEditTime: 2022-09-11 21:20:45
 */

import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 10,
  },
  reducers: {
    changeNumber(state, { payload }) {
      state.count += payload
    },
  },
})

export const { changeNumber } = countSlice.actions
export default countSlice.reducer
