/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 11:53:41
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 18:22:12
 */

const store = require("./store")
const nameAction = require("./store/actionCreators")

store.subscribe(() => {
  console.log("store.getState()", store.getState())
})

store.dispatch(nameAction("chen"))
