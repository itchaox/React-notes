/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-11 12:13:52
 * @LastEditors: wc
 * @LastEditTime: 2022-09-11 21:00:55
 */
import { configureStore } from "@reduxjs/toolkit"
import countReducer from "./modules/count"
import userReducer from "./modules/user"

const store = configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
  },
})

export default store
