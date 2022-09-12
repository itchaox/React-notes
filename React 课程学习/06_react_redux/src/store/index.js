/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:11:11
 * @LastEditors: wc
 * @LastEditTime: 2022-09-10 21:58:01
 */

import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"

import homeReducer from "./modules/home"
import userReducer from "./modules/user"

// 打开 redux-devtools(注意这个只能在开发环境打开, 在生产环境需要关闭)
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
  compose

// 分模块处理
const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
