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

#### 3.3 refs

##### 3.3.1 字符串形式 ref

```javascript
    class Refs extends React.Component {
      render() {
        return (
          <div>
            {/* ref 类似id，相当于打标识 */}
            <input ref='r1' type="text" placeholder="点击获取提示信息" />&nbsp;&nbsp;
            <button onClick={this.click}>点击获取提示信息</button>&nbsp;&nbsp;
            <input ref='r2' type="text" placeholder="失去焦点提示信息" onBlur={this.blur} />
          </div>
        )
      }

      click = () => {
        // this.refs.r1 获取ref为字符串r1的元素
        alert(this.refs.r1.value)
      }

      blur = () => {
        alert(this.refs.r2.value)
      }
    }

    ReactDOM.render(<Refs />, document.getElementById('react'))
```

##### 3.3.2 回调形式 ref

```javascript
    class Refs extends React.Component {
      render() {
        return (
          <div>
            {/* 
          ref 类似id，相当于打标识
          回调形式 ref, 回调函数传递的参数就是当前节点
          此处 this 指向当前组件实例对象，this.input1 相当于在当前组件实例对象上添加 input1 属性
          */}
            <input ref={c => this.input1 = c} type="text" placeholder="点击获取提示信息" />&nbsp;&nbsp;
            <button onClick={this.click}>点击获取提示信息</button>&nbsp;&nbsp;
            <input ref={c => this.input2 = c} type="text" placeholder="失去焦点提示信息" onBlur={this.blur} />
          </div>
        )
      }

      click = () => {
        alert(this.input1.value)
      }

      blur = () => {
        alert(this.input2.value)
      }
    }

    ReactDOM.render(<Refs />, document.getElementById('react'))
```

##### 3.3.3 回调形式 ref 调用次数问题

* 问题：若 ref 回调函数以内联函数方式定义，则更新过程中会被执行两次，第一次传入参数 null，第二次传入参数为当前 DOM 元素
* 原因：每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并设置新的
* 解决方式：将 ref 回调函数定义成 class类 的绑定函数方式可避免该问题
* 注意：大多数情况下该问题无关紧要

```javascript
    class Refs extends React.Component {
      render() {
        return (
          <div>
            {/* 将 ref 回调函数定义成 class类 的绑定函数方式 */}
            <input ref={this.saveInput} placeholder="点击获取提示信息" type="text" /><br /><br />
            <button onClick={this.click}>点击获取提示信息</button>
          </div>
        )
      }

      // 回调函数形式 ref
      saveInput = c => this.input = c

      // 点击函数
      click = () => {
        alert(this.input.value)
      }
    }

    ReactDOM.render(<Refs />, document.getElementById('react'))
```

##### 3.3.4 createRef

* React 官方推荐使用 ref 的方式

```javascript
    // 1. 类式创建组件
    class Refs extends React.Component {
      render() {
        return (
          <div>
            <input ref={this.ref1} type="text" placeholder="点击获取提示信息" />&nbsp;&nbsp;
            <button onClick={this.click}>点击获取提示信息</button>&nbsp;&nbsp;
            <input ref={this.ref2} onBlur={this.blur} type="text" placeholder="失去焦点提示信息" />
          </div>
        )
      }

      // React.createRef 调用后返回一个容器，该容器可以存储被ref所标识的节点，使用一次则必须调用一次
      ref1 = React.createRef()
      ref2 = React.createRef()

      // 点击获取提示信息
      // this.ref1.current，必须拿到 current 属性，才算是拿到当前 DOM 节点
      click = () => {
        alert(this.ref1.current.value)
      }

      // 失去焦点提示信息
      blur = () => {
        alert(this.ref2.current.value)
      }
    }

    // 2. 渲染组件到页面中
    ReactDOM.render(<Refs />, document.getElementById('react'))
```

### 4. 事件处理

#### 4.1 事件处理基本概念

1. 通过 onAbc 属性指定事件处理函数（注意大小写）

*  React 使用自定义（合成）事件，而不使用原生 DOM 事件 —— 更好兼容性
* React 中事件通过事件委托方式处理（委托给组件最外层元素）—— 更高效

2. 通过 event.target 得到发生事件的 DOM 元素对象 —— 不要过渡使用 ref

### 5. react 收集表单数据

#### 5.1 非受控组件

* 非受控组件：在表单中，所有输入控件，使用时才获取节点（现用现取）
* 缺点：多次使用 ref

```javascript
   class Login extends React.Component {
      render() {
        return (
          <div>
            <form action="https://www.baidu.com" onSubmit={this.handleSubmit}>
              <label>用户名：</label><input ref={c => this.name = c} type="text" name='name' />
              <label>密码：</label><input ref={c => this.password = c} type="password" name='password' />
              <button>登录</button>
            </form>
          </div>
        )
      }

      // 非受控组件：在表单中，所有输入控件，使用时才获取节点（现用现取）
      // 缺点：多次使用 ref
      handleSubmit = event => {
        // 阻止表单提交
        event.preventDefault();
        alert(`你的用户名：${this.name.value}, 你的密码：${this.password.value}`);
      }
    }

    ReactDOM.render(<Login />, document.getElementById('react'))
```

#### 5.2 受控组件

* 受控组件：在表单中，所有输入控件，使用前就已经获取节点（先取后用）
* 优点：未使用 ref

```javascript
    class Login extends React.Component {
      render() {
        return (
          <div>
            <form>
              用户名：<input onChange={this.handleUserName} type="text" name='userName' />&nbsp;&nbsp;
              密码：<input onChange={this.handleUserPassword} type="password" name='userPassword' />
            </form>
          </div>
        )
      }

      // 受控组件：在表单中，所有输入控件，使用前就已经获取节点（先取后用）
      // 优点：未使用 ref
      state = {
        userName: '',
        userPassword: ''
      }

      handleUserName = event => {
        this.setState({ userName: event.target.value })
      }

      handleUserPassword = event => {
        this.setState({ userPassword: event.target.value })
      }

    }

    ReactDOM.render(<Login />, document.getElementById('react'))
```

### 6. 高阶函数-函数柯理化

#### 6.1 高阶函数-函数柯理化

*  高阶函数：一个函数满足下面2个规范中的任何一个

  1. 若 A 函数，接收的参数是一个函数，则 A 函数是高阶函数

  2. 若 A 函数，调用的返回值仍是一个函数，则 A 函数是高阶函数
  3. 常见高阶函数：Promise、setTimeout、arr.map() 等等

* 函数的柯理化：函数调用的返回值是函数，且不断调用，实现多次接受参数最后统一处理的函数编码形式

```javascript
  function sum(a) {
    return b => {
      return c => {
        return a + b + c
      }
    }
  }
```

* 受控组件使用高阶函数和函数柯理化

```javascript
    class Login extends React.Component {
      render() {
        return (
          <div>
            <form>
              用户名：<input onChange={this.handleFormData('userName')} type="text" name='userName' />&nbsp;&nbsp;
              密码：<input onChange={this.handleFormData('userPassword')} type="password" name='userPassword' />
            </form>
          </div>
        )
      }

      state = {
        userName: '',
        userPassword: ''
      }

      handleFormData = dataType => {
        return event => {
          // [dataType], 是为了把变量作为对象的对象属性
          this.setState({ [dataType]: event.target.value })
        }
      }
    }

    ReactDOM.render(<Login />, document.getElementById('react'))
```

