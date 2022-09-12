/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-10 22:51:27
 * @LastEditors: wc
 * @LastEditTime: 2022-09-11 14:55:23
 */
import React, { PureComponent } from "react"
import { connect } from "react-redux"

import Home from "./pages/Home"
import User from "./pages/User"
import { changeNumber } from "./store/modules/count"

class App extends PureComponent {
  render() {
    const { count } = this.props
    const { changeCount } = this.props
    return (
      <>
        <div>App Count: {count}</div>
        <button onClick={() => changeCount(10)}>+10</button>
        <Home />
        <User />
      </>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count.count,
})

const mapDispatchToProps = dispatch => ({
  changeCount: number => dispatch(changeNumber(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
