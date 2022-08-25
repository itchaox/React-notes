/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-08-25 14:13:10
 * @LastEditors: wc
 * @LastEditTime: 2022-08-25 16:15:41
 */

import { useState, useEffect } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count
})

  return (
    
    <div>

      <p style={{ color: 'red'}}>点击 { count } 次</p>
      <button onClick={() => setCount(count + 1)}>点我加1</button>
    </div>
  )
}