/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-11 12:05:26
 * @LastEditors: wc
 * @LastEditTime: 2022-09-11 22:04:25
 */
import React, { PureComponent } from "react"
import { connect } from "react-redux"

export class User extends PureComponent {
  render() {
    return (
      <>
        <div>User</div>
        {this.props.list.map(i => {
          return (
            <h1 key={i.acm}>
              {i.acm}
              {i.title}
            </h1>
          )
        })}
      </>
    )
  }
}

const mapStateToProps = state => ({
  list: state.user.list,
})

export default connect(mapStateToProps)(User)
