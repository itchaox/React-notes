# React  进阶之路

### 1. JSX

#### 1.1 JSX 语法规则

1. 定义虚拟DOM时，不写引号
2. 标签中混入**JS表达式**时用 { }
3. 样式类名指定用 className
4. 内联样式，用 style = {{ key: value }} 的形式写
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母
   * 若小写字母开头，则将标签转为 html 同名元素，若 html 中无该标签对应的同名元素，则报错
   * 若大写字母开头，react 会渲染对应的组件，若组件未定义，则报错

#### 1.2 JSX 练习

```javascript
    const data = ['AngularJS', 'Vue', 'React']
    const VDOM = (
      <div>
        <h1>前端框架</h1>
        <ul>
          {
            data.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
    ReactDOM.render(VDOM, document.getElementById('JSX'))
```

### 2. React 定义组件

#### 2.1 函数式组件

```javascript
 // 组件名必须大写开头
    function Foo() {
      return <h2>函数式组件（适用于简单组件）</h2>
    }
    // 组件必须有结束标签
    ReactDOM.render(<Foo/>, document.getElementById('react'))
```

#### 2.2 类式组件

```javascript
  // 类式组件必须继承自 React.Component
    class A extends React.Component {
      // 必须有个render函数，且有返回值，而且这个 render 函数存在于 A 类式组件的实例对象上
      render() {
        console.log(this);  // A, 原因：this指向A组件的实例对象
        return <h2> 类式组件（适用于复杂组件）</h2 >
      }
    }
    // console.log(this); // undefined, 原因：经过babel转换后开启严格模式，this不能指向window
    ReactDOM.render(<A />, document.getElementById("react"))
```

### 3. 组件实例三大属性

#### 3.1 state

##### 3.1.1 state 原始写法

```javascript
 // 1. 类式组件创建
    class State extends React.Component {
      // 构造器只在初始化的时候调用1次
      constructor(props) {
        super(props);
        // 初始化 state 状态
        this.state = {
          isHight: true
        }
        // 改变 change 的指向，让 change 指向 State 组件实例对象
        this.change = this.change.bind(this)
      }

      // render函数调用1+n次，第1次是初次渲染，n次是更新渲染
      render() {
        return <h2 onClick={this.change}>今天温度是{this.state.isHight ? '100度' : '20度'}</h2>
      }

      // change函数点击n次则调用n次
      change() {
        // 修改状态需要用到 setState, 更新是合并，只替换对应属性
        this.setState({ isHight: !this.state.isHight })
        // 不能直接修改状态
        // this.state.isHight = !this.state.isHight
      }
    }
    
    // 2. 将组件渲染到页面上
    ReactDOM.render(<State />, document.getElementById("react"))
```

##### 3.1.2 state 简写方式

```javascript
    // 1. 类式组件创建
    class State extends React.Component {

      // 直接使用赋值语句，代表在组件实例对象上添加属性
      // 直接初始化 state
      state = {
        isHight: true
      }

      render() {
        return <h2 onClick={this.change}>今天温度是{this.state.isHight ? '100度' : '20度'}</h2>
      }

      // 自定义方法——使用赋值语句 + 箭头函数
      change = () => {
        this.setState({ isHight: !this.state.isHight })
      }
    }

    // 2. 将组件渲染到页面上
    ReactDOM.render(<State />, document.getElementById("react"))
```

#### 3.2 props

##### 3.2.1 props 基本使用

```javascript
    // 1. 创建组件
    class Props extends React.Component {
      render() {
        const { name, age, sex } = this.props
        return (
          <ul>
            <li>名字：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
          </ul>
        )
      }
    }
    ReactDOM.render(<Props name='itchao' sex='男' age='22' />, document.getElementById("react1"))
```

##### 3.2.2 props 批量传递（标签属性）

```javascript
    // 1. 创建组件
    class Props extends React.Component {
      render() {
        const { name, age, sex } = this.props
        return (
          <ul>
            <li>名字：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
          </ul>
        )
      }
    }
    const r1 = {
      name: 'itchao',
      sex: '男',
      age: '22'
    }
    
    // 2. 渲染组件到页面
    // 因为 react关键库 和 babel转化，所以 {...r1} 才能获取对象 
    ReactDOM.render(<Props {...r1} />, document.getElementById("react1"))
```

##### 3.2.3 props 进行限制

```javascript
    // 1. 创建组件
    class Props extends React.Component {
      render() {
        const { name, age, sex } = this.props
        // 注意：props是只读属性，不能修改属性
        return (
          <ul>
            <li>名字：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
          </ul>
        )
      }
    }
    // 对标签属性进行类型和必要性限制
    Props.propTypes = {
      name: PropTypes.string.isRequired,  // 限制类型为字符串类型 string，而且是必选值
      sex: PropTypes.string,  // 限制类型为字符串类型 string
      age: PropTypes.number,  // 限制类型为数字类型 number
      a: PropTypes.func  // 限制类型为函数类型 function
    }
    // 指定标签属性默认值
    Props.defaultProps = {
      sex: '男',
      age: 18
    }
    const r1 = {
      name: 'itchao',
      sex: '男',
      age: 22,
      a: function () {
        console.log('函数');
      }
    }

    // 2. 渲染组件到页面
    ReactDOM.render(<Props {...r1} />, document.getElementById("react1"))
```

##### 3.2.4 props 简写方式

```javascript
    // 1. 创建组件
    class Props extends React.Component {
      
      // 构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
      // constructor(props) {
      //   super(props);
      //   console.log(this.props);
      // }

      // props简写方式：static XXX

      // 对标签属性进行类型和必要性限制
      static propTypes = {
        name: PropTypes.string.isRequired,  // 限制类型为字符串类型 string，而且是必选值
        sex: PropTypes.string,  // 限制类型为字符串类型 string
        age: PropTypes.number,  // 限制类型为数字类型 number
        a: PropTypes.func  // 限制类型为函数类型 function
      }

      // 指定标签属性默认值
      static defaultProps = {
        sex: '男',
        age: 18
      }

      render() {
        const { name, age, sex } = this.props
        // 注意：props是只读属性，不能修改属性
        return (
          <ul>
            <li>名字：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
          </ul>
        )
      }
    }

    const r1 = {
      name: 'itchao',
      sex: '男',
      age: 22,
      a: function () {
        console.log('函数');
      }
    }

    // 2. 渲染组件到页面
    ReactDOM.render(<Props {...r1} />, document.getElementById("react1"))
```

##### 3.2.5 函数式组件 props 使用

```javascript
    function Foo(props) {
      // 函数接收 props 作为参数
      const { name, sex, age } = props;
      return (
        <ul>
          <li>名字：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age}</li>
        </ul>
      )
    }

    Foo.propTypes = {
      name: PropTypes.string.isRequired,
      sex: PropTypes.string,
      age: PropTypes.number
    }

    Foo.defaultProps = {
      sex: '男',
      age: 18
    }
    ReactDOM.render(<Foo name='itchao' sex='男' age='22' />, document.getElementById('react'))
```

