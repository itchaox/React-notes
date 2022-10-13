import React, { Component } from "react";

import "./style.css";

/**
 * 需求:
 * 1. 展示姓名和年龄
 * 2. 修改年龄
 */
export class TableItem extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      list: props.list,
      count: 1
    };
  }

  changeCount() {
    let index = this.state.list.findIndex(item => item.age === 22);
    if (index !== -1) {
      this.setState(state => (state.list[index].age = 100));
    }
  }

  componentDidMount() {
    console.log("life cycle is mounted");
  }

  componentDidUpdate() {
    console.log("life cycle is updated");
  }

  componentWillUnmount() {
    console.log("life cycle is unmount");
  }

  render() {
    console.log("render");
    const { count, list } = this.state;
    return (
      <>
        <div>
          展示姓名:
          {list.map(item => {
            return (
              <div key={item.age}>
                <span className="wc-tl-name">{item.name} </span>
                <span className="wc-tl-age">{item.age}</span>
                <div>计数值: {count}</div>
              </div>
            );
          })}
        </div>
        <button onClick={() => this.changeCount(22)}>修改计数</button>
        {true && <p>111</p>}
        {false && <p>222</p>}
        <hr />
      </>
    );
  }
}

export default TableItem;
