/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-02 10:05:07
 * @LastEditors: wc
 * @LastEditTime: 2022-09-02 14:12:39
 */

import React, { useState } from "react"

import "./style.css"

function Tab(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function tabClick(index) {
    setCurrentIndex(index)

    props.func(props.tabList[index])
  }

  return (
    <div className="tab">
      {props.tabList.map((i, index) => {
        return (
          <div className={`tab-item`} onClick={() => tabClick(index)} key={i}>
            <span className={` ${currentIndex === index && "active"}`}>
              {i}
            </span>
            {props.zslot(i)}
          </div>
        )
      })}
      {props.slot}
    </div>
  )
}

export default Tab
