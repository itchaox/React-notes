/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-08 10:16:22
 * @LastEditors: wc
 * @LastEditTime: 2022-09-08 11:52:44
 */
const CHANGE_NAME = require("./constants")

const nameAction = name => ({ type: CHANGE_NAME, name })

module.exports = nameAction
