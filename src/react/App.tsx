import '~/style.css'
import React, { useState } from 'react'
import { Light } from './Light'

export default function App() {
  const lights = [
    { color: 'red', on: false },
    { color: 'yellow', on: false },
    { color: 'green', on: false },
  ]
  const [time, setTime] = useState(1)
  const [running, setRuning] = useState(true)
  const [dire, setDire] = useState(true)
  const [cur, setCur] = useState(0)

  // TODO:
  const toggleLight = () => {
    if (!running)
      return
    const count = cur + (dire ? 1 : -1)

    if (count === 0)
      setDire(true)

    if (count === 2)
      setDire(false)

    setCur(count)
  }

  const toggleRun = () => {
    setRuning(!running)
  }

  return (
    <div className="App">
      <div>
        <div className="traffic-lights">
          {lights.map((light, idx) => (
            <Light
              key={idx}
              color={light.color}
              on={cur === idx}
              duration={time}
              toggleLight={toggleLight}
              running={running}
            />
          ))}
        </div>

        <button
          className="start-btn"
          onClick={() => {
            toggleRun()
          }}
        >
          {running ? '暂停' : '开始'}
        </button>

        <div>
          <span className="text">方向 {dire ? '下' : '上'}，时间间隔</span>
          <input
            className="input-time"
            value={time}
            onChange={(e) => {
              setTime(parseInt(e.target.value))
            }}
          />
        </div>
      </div>
    </div>
  )
}
