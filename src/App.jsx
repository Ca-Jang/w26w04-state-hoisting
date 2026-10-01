import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // 이게 props로 받는 친구임
  // 배열을 리턴함 따라서 Count에서 중괄호를 통해 받아도 됨
  // 읽기전용임

  return (
    <div>
      <Counter
        count={count}
        onIncrement={ () => setCount(prev => prev + 1)} 
      />
    </div>
  )
}

// function Counter(props) {
function Counter({count, onIncrement}) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={onIncrement}>
          증가
      </button>
    </div>
  )
}

export default App
