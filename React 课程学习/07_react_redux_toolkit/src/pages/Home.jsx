/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-11 12:05:21
 * @LastEditors: wc
 * @LastEditTime: 2022-09-11 21:17:36
 */
import React, { PureComponent } from "react"
import { connect } from "react-redux"

export class Home extends PureComponent {
  render() {
    return (
      <>
        <div>Home</div>
        <h1>{this.props.count}</h1>
      </>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count.count,
})

export default connect(mapStateToProps)(Home)
