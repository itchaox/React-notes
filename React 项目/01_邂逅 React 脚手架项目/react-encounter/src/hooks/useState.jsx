/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-08-25 13:46:35
 * @LastEditors: wc
 * @LastEditTime: 2022-08-25 13:54:43
 */

import { useState } from 'react'

export default function People() {
  const [name, setName] = useState('itchao') // 名字
  const [age, setAge] = useState(23) // 年龄
  const [height, setHeight] = useState(1.88) // 身高

  return (
    <div>
    <h1>个人信息</h1>
    <ul>
      <li>姓名: { name }</li>
      <li>年龄: { age }</li>
      <li>身高: { height }</li>
    </ul>
    </div>
  )
}