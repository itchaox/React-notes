/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-02 10:05:56
 * @LastEditors: wc
 * @LastEditTime: 2022-09-02 14:12:15
 */
import React, { useState } from "react"

import Tab from "./Tab"

function App() {
  const [tabList, setTabList] = useState(["流行", "时尚", "潮流"])

  const [currentTab, setCurrentTab] = useState("无数据")

  return (
    <div>
      <Tab
        tabList={tabList}
        func={i => setCurrentTab(i)}
        slot={<h1>插槽实现</h1>}
        zslot={i => <button>{i}</button>}
      />
      <h1>标题文字: {currentTab}</h1>
    </div>
  )
}

export default App
