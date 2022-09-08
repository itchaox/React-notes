/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 22:11:11
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 22:17:24
 */

import { createStore } from "redux"
import reducer from "./reducer"

const store = createStore(reducer)

export default store
