/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-09 22:39:30
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 22:39:42
 */
import { CHANGE_COUNT } from "./constants"

export const changeCountAction = number => ({ type: CHANGE_COUNT, number })
