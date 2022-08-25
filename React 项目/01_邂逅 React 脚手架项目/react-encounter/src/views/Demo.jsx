/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-08-25 10:56:20
 * @LastEditors: wc
 * @LastEditTime: 2022-08-25 11:55:43
 */

import { useState} from 'react'

export default function Demo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>点击 { count } 次</p>
      <button onClick={ () => setCount(count + 1) }>
        点我点我!
      </button>
    </div>
  )
}