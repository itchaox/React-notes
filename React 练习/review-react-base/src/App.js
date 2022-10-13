// react 官方文件
import React, { Component } from "react";

// 公共组件
import TableItem from "./components/TableItem/TableItem.jsx";

export class App extends Component {
  render() {
    const list = [
      {
        name: "li",
        age: 34
      },
      { name: "wang", age: 22 }
    ];
    return (
      <>
        <TableItem list={list} />
        <div>App</div>
      </>
    );
  }
}

export default App;
