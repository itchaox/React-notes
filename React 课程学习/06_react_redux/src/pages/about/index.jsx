/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-09 09:06:54
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 22:58:38
 */
import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { changeCountAction } from "../../store/modules/home/actionCreators"

import { userAction } from "../../store/modules/user/actionCreators"

class About extends PureComponent {
  render() {
    const { count, list, myChangeCountAction } = this.props

    return (
      <div>
        <div></div>
        <h1>About</h1>
        <h1>Count: {count}</h1>
        <button onClick={() => myChangeCountAction(100)}>修改 + 100</button>
        <h1>
          list:
          {list.map(i => {
            return <div key={i.title}>{i.title}</div>
          })}
        </h1>
      </div>
    )
  }
}

// 映射 state 数据到 props 中
const mapStateToProps = state => ({
  count: state.home.count,
  list: state.user.list,
})

// 映射 dispatch 到 props 中
const mapDispatchToProps = dispatch => ({
  myChangeCountAction: num => dispatch(changeCountAction(num)),
  userAction() {
    dispatch(userAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
