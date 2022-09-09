/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-09 12:12:46
 * @LastEditors: wc
 * @LastEditTime: 2022-09-09 22:59:02
 */
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { userAction } from "../../store/modules/user/actionCreators"

class User extends PureComponent {
  // componentDidMount() {
  //   axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
  //     const { changeList } = this.props
  //     let list = res.data.data.banner.list
  //     changeList(list)
  //   })
  // }
  constructor() {
    super()
    this.state = {
      message: "123123",
    }
  }

  componentDidMount() {
    this.props.userAction()
  }

  render() {
    return (
      <>
        <div>User</div>
        <h1>用户</h1>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userAction() {
    dispatch(userAction())
  },
})

export default connect(null, mapDispatchToProps)(User)
