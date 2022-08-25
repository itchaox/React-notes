// 导入公共组件
import Demo from './views/Demo.jsx'

// hooks
import UseState from './hooks/useState.jsx'
import UseEffect from './hooks/useEffect.jsx'

export default function App() {
  return (
    <div>
      <Demo number='222'/>
      <UseState />
      <UseEffect />
    </div>
  );
}