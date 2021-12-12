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
            <input ref='r1' type="text" placeholder="点击获取提示信息" />
            <button onClick={this.click}>点击获取提示信息</button>
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
            <input ref={c => this.input1 = c} type="text" placeholder="点击获取提示信息" />
            <button onClick={this.click}>点击获取提示信息</button>
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
* 原因：每次渲染时会创建一个新的函数实例，所以 React 会清空旧的 ref 并设置新的
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
            <input ref={this.ref1} type="text" placeholder="点击获取提示信息" />
            <button onClick={this.click}>点击获取提示信息</button>
          </div>
        )
      }

      // React.createRef 调用后返回一个容器，该容器可以存储被ref所标识的节点，使用一次则必须调用一次
      ref1 = React.createRef()

      // 点击获取提示信息
      // this.ref1.current，必须拿到 current 属性，才算是拿到当前 DOM 节点
      click = () => {
        alert(this.ref1.current.value)
      }

    }

    // 2. 渲染组件到页面中
    ReactDOM.render(<Refs />, document.getElementById('react'))
```

### 4. 事件处理

#### 4.1 事件处理基本概念

1. 通过类似 onAbc 属性指定事件处理函数（注意大小写）

*  React 使用自定义（合成）事件，而不使用原生 DOM 事件 —— 更好兼容性（原生 onclick -> React 中 onClick 等等）
* React 中事件通过事件委托方式处理（委托给组件最外层元素）—— 更高效

2. 通过 event.target 得到发生事件的 DOM 元素对象 —— 不要过渡使用 ref

### 5. React 收集表单数据

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

### 7. React 生命周期函数（旧）

#### 7.1 邂逅 React 生命周期函数

* 名字：生命周期回调函数 - 生命周期钩子函数 - 生命周期函数 - 生命周期钩子
* 概念：React 内置好的回调函数，可以在适当的时候进行回调操作
* 分析：
  1. 组件从创建到销毁经历的一些特定阶段
  2. React 组件中包含一系列钩子函数（生命周期回调函数），会在特定时刻被调用
  3. 在定义组件时，在特定的生命周期回调函数中，做特定操作
* 例子如下：创建定时器和销毁定时器

```javascript
    class Life extends React.Component {

      // 设置状态
      state = {
        opacity: 1
      }

      // 组件挂载完毕
      componentDidMount() {
        // 设置定时器
        this.timer = setInterval(() => {
          let { opacity } = this.state
          opacity -= 0.1
          if (opacity <= 0) opacity = 1
          this.setState({ opacity })
        }, 200)
      }

      // 组件将要卸载
      componentWillUnmount() {
        // 清除定时器
        clearInterval(this.timer)
      }

      // 组件初次渲染和状态更新后
      render() {
        return (
          <div>
            <h1 style={{ opacity: this.state.opacity }}>React 我一定能学会！</h1>
            <button onClick={this.click}>相信自己</button>
          </div>
        )
      }

      click = () => {
        // 卸载页面 DOM 节点
        ReactDOM.unmountComponentAtNode(document.getElementById('react'));
      }
    }

    // 挂载页面 DOM 节点
    ReactDOM.render(<Life />, document.getElementById('react'))
```

#### 7.2 挂载阶段

**挂载阶段调用构造函数如下：**

1. constructor( )，构造器
2. componentWillMount( )，组件将要挂载
4. render( )，渲染组件
4. componentDidMount( )，组件完成挂载
5. componentWillUnmount( )，组件将要销毁

* 例子：

```javascript
    class Count extends React.Component {

      // 构造器，首先调用
      constructor(props) {
        console.log('count---constructor');
        super(props);
        this.state = {
          count: 0
        }
      }

      // 组件将要挂载
      componentWillMount() {
        console.log('count---componentWillMount');
      }

      // 组件挂载完毕
      componentDidMount() {
        console.log('count---componentDidMount');
      }

      // 组件将要卸载
      componentWillUnmount() {
        console.log('count---componentWillUnmount');
      }

      // 点击事件
      add = () => {
        let count = this.state.count + 1
        this.setState({ count })
      }

      // 卸载事件
      uninstall = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('react'))
      }

      // 组件初次渲染和状态更新
      render() {
        console.log('count---render');
        const { count } = this.state
        return (
          <div>
            <h2>当前值为：{count}</h2>
            <button onClick={this.add}>+1</button>
            <button onClick={this.uninstall}>卸载组件</button>
          </div>
        )
      }
    }

    ReactDOM.render(<Count />, document.getElementById('react'))
```

#### 7.3 父组件 render 阶段

##### 7.3.1 setState( )

* 前提是必须使用 setState( ) 实现状态更新后才回调如下函数

**状态更新调用构造函数如下：**

1. shouldComponentUpdate( )，控制组件是否更新的 ' 开关 '；需要返回一个布尔值，默认返回 true。
2. componentWillUpdate( )，组件将要更新
4. render( )，渲染组件
4. componentDidUpdate( )，组件更新完毕
5. componentWillUnmount( )，组件将要卸载

* 例子：

```javascript
    class Count extends React.Component {

      // 组件将要卸载
      componentWillUnmount() {
        console.log('count---componentWillUnmount');
      }

      // 控制组件是否更新的 '开关'
      shouldComponentUpdate() {
        console.log('count---shouldComponentUpdate');
        // 默认返回值为 true
        return true
      }

      // 组件将要更新
      componentWillUpdate() {
        console.log('count---componentWillUpdate');
      }

      // 组件更新完毕
      componentDidUpdate() {
        console.log('count---componentDidUpdate');
      }


      // 点击事件
      add = () => {
        let count = this.state.count + 1
        this.setState({ count })
      }

      // 卸载事件
      uninstall = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('react'))
      }

      // 组件初次渲染和状态更新
      render() {
        console.log('count---render');
        const { count } = this.state
        return (
          <div>
            <h2>当前值为：{count}</h2>
            <button onClick={this.add}>+1</button>
            <button onClick={this.uninstall}>卸载组件</button>
          </div>
        )
      }
    }

    ReactDOM.render(<Count />, document.getElementById('react'))
```

##### 7.3.2 forceUpdate( )

**强制更新调用构造函数如下：**

1. componentWillUpdate( )，组件将要更新；需主动调用 forceUpdate( ) 函数，即可在不更新状态的情况下直接实现强制更新操作。
2. render( )，渲染组件
3. componentDidUpdate( )，组件更新完成
4. componentWillUnmount( )，组件将要卸载

* 例子：

```javascript
    class Count extends React.Component {
      
      // 组件将要卸载
      componentWillUnmount() {
        console.log('count---componentWillUnmount');
      }

      // 组件将要更新
      componentWillUpdate() {
        console.log('count---componentWillUpdate');
      }

      // 组件更新完毕
      componentDidUpdate() {
        console.log('count---componentDidUpdate');
      }


      // 点击事件
      add = () => {
        let count = this.state.count + 1
        this.setState({ count })
      }

      // 卸载事件
      uninstall = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('react'))
      }

      // 强制更新事件
      force = () => {
        // forceUpdate(),强制更新：不改变状态也可直接实现更新操作
        this.forceUpdate()
      }

      // 组件初次渲染和状态更新
      render() {
        console.log('count---render');
        const { count } = this.state
        return (
          <div>
            <h2>当前值为：{count}</h2>
            <button onClick={this.add}>+1</button>
            <button onClick={this.uninstall}>卸载组件</button>
            <button onClick={this.force}>强制更新</button>
          </div>
        )
      }
    }

    ReactDOM.render(<Count />, document.getElementById('react'))
```

##### 7.3.3 父组件 render

**父组件 render 调用构造函数如下：**

1. componentWillReceiveProps( )，组件将要接收 props；可传入 props 参数，获取 state 内数据；但注意第一次接收 props 不回调该函数，后续更新传递 props 才回调该函数。
2. shouldComponentUpdate( )，控制组件是否更新的 ' 开关 '；需要返回一个布尔值，默认返回 true。
3. componentWillUpdate( )，组件将要更新
4. render( )，渲染组件
5. componentDidUpdate( )，组件更新完毕
6. componentWillUnmount( )，组件将要卸载

* 例子：

```javascript
    class Parent extends React.Component {

      state = {
        name: '奥迪'
      }

      changeCar = () => {
        this.setState({ name: '兰博基尼' })
      }

      render() {
        return (
          <div>
            <h2>Parent 父组件</h2>
            <button onClick={this.changeCar}>买新车</button>
            <Children name={this.state.name} />
          </div>
        )
      }
    }

    class Children extends React.Component {

      componentWillReceiveProps() {
        console.log('Children---componentWillReceiveProps');
      }

      render() {
        return (
          <h2>当前汽车品牌：{this.props.name}</h2>
        )
      }
    }

    ReactDOM.render(<Parent />, document.getElementById('react'))
```

#### 7.4 React 旧生命周期函数总结

1. 初始化阶段：由 ReactDOM.render( ) 触发 —— 初次渲染
   1. constructor( )
   2. componentWillMount( )
   3. render( )
   4. componentDidMount( )，**常用**
      * 常在该钩子函数中进行一些初始化操作，例如：开启定时器、发送网络请求、订阅消息 等等
2. 更新阶段：父组件 render 触发
   1. componentWillReceiveProps( )
   2. shouldComponentUpdate( ) -> setState( )
   3. componentWillUpdate( ) -> forceUpdate( )
   4. render( )，**必须调用**
   5. componentDidUpdate( )
3. 卸载组件阶段：由 ReactDOM.unmountComponentAtNode( ) 触发，该回调函数需要传入具体的 DOM 节点
   1. componentWillUnmount( )，**常用**
      * 常在该钩子函数中进行一些收尾操作，例如：关闭定时器、取消订阅消息 等等

### 8. React 生命周期函数（新）

#### 8.1 React 新旧生命周期函数区别

##### 8.1.1 即将废弃钩子函数

1. componentWillMount( )
2. componentWillReceiveProps( )
3. componentWillUpdate( )

* 注意：现在使用会出现警告，下一个大版本需要加上 UNSAFE_ 前缀才能使用，后续（React 18 ）可能被彻底废弃，不建议使用

##### 8.1.2 新增钩子函数

1. getDerivedStateFromProps( )，从 props 中获取派生状态

   1. 必须是静态函数，static getDerivedStateFromProps( )
   2. 必须有返回值且返回值是 state 或者 null
   3. 可接受 props 参数
   4. 使用场景：若 state 在任何时候都取决于 props
   5. 缺点：派生状态会导致代码冗余，并使组件难以维护
   6. 注意：使用很少，了解即可

   * 例子：

   ```javascript
         static getDerivedStateFromProps(props, state) {
           console.log('NewLife---getDerivedStateFromProps', props, state);
           return props
         }
   ```

2. getSnapshotBeforeUpdate( )，在更新前获取当前状态快照

   1. 必须有返回值且返回值是 snapshot(任何值都可作为快照值) 或者 null
   2. 在最近一次渲染输出（提交到 DOM 节点）之前调用
   3. 让组件在发生更改之前从 DOM 中捕获一些信息（例如：滚动位置）
   4. 此生命周期函数的任何返回值都将作为参数传递给 componentDidupdate( )
   5. 注意：使用很少，了解即可

#### 8.2 React 新生命周期函数总结

1. 初始化阶段：由 ReactDOM.render( ) 触发 —— 初次渲染
   1. constructor( )
   2. getDerivedStateFromProps( )
   3. render( )
   4. componentDidMount( )，**常用**
      * 常在该钩子函数中进行一些初始化操作，例如：开启定时器、发送网络请求、订阅消息 等等
2. 更新阶段：父组件 render 触发
   1. getDerivedStateFromProps( )
   2. shouldComponentUpdate( ) -> setState( )
   3. render( )，**必须调用**
   4. getSnapshotBeforeUpdate( )
   5. componentDidUpdate(preProps, preState, snapshotValue)，
      * 可接收三个参数，第一个参数为上一次的 props，第二个参数为上一次的 state，第三个参数为快照值 snapshotValue
3. 卸载组件阶段：由 ReactDOM.unmountComponentAtNode( ) 触发，该回调函数需要传入具体的 DOM 节点
   1. componentWillUnmount( )，**常用**
      * 常在该钩子函数中进行一些收尾操作，例如：关闭定时器、取消订阅消息 等等

### 9. React 脚手架

#### 9.1 邂逅 React 脚手架

1.  xxx 脚手架：用来帮助程序员快速创建一个基于 xxx 库的模板项目
   1. 包含了所有需要的配置（语法检查、JSX 编译、devServer 等等）
   2. 下载好了所有相关依赖
   3. 可以直接运行处一个简单效果
2. react 提供了一个用于创建 react 项目的脚手架库：create-react-app
3. 项目整体技术架构为：react + webpack + es6 + eslint 等等
4. 使用脚手架开发项目的特点：模块化、组件化、工程化

#### 9.2 创建项目并启动

**第一步，**全局安装：npm install -g create-react-app

**第二步，**切换到向创建项目的目录，使用命令：create-react-app hello-react（文件夹名）

**第三步，**切换目录，进入项目文件夹：cd hello-react（文件夹名）

**第四步，**启动项目：npm start

