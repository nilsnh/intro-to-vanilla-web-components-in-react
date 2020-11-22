import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
      <div>Counter: {count}</div>
      <style jsx>{`
        .counter {
          display: flex;
          align-items: center;
        }
        .counter > * {
          margin: var(--spacing-small);
        }
        button {
          border: 1px solid var(--chill-blue);
        }
      `}</style>
    </div>
  )
}
