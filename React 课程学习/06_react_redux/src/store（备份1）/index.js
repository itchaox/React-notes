/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:11:11
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 17:32:23
 */

import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer"

// 打开 redux-devtools(注意这个只能在开发环境打开, 在生产环境需要关闭)
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
  compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
