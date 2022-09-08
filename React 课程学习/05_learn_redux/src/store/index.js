/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 10:15:16
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 11:49:37
 */
const { createStore } = require("redux")
const reducer = require("./reducer")

const store = createStore(reducer)

module.exports = store
