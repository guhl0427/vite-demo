import React, { useEffect } from 'react'

interface Props {
  on: boolean
  color: string
  duration: number
  running: boolean
  toggleLight: Function
}
export const Light = (props: Props) => {
  // const [color, setColor] = useState(props.color)

  useEffect(() => {
    let timerId: number | undefined = -1
    if (props.on) {
      timerId = setTimeout(() => {
        props.toggleLight()
      }, props.duration * 1000)
    }
    else {
      if (timerId)
        clearTimeout(timerId)
    }
    return () => { clearTimeout(timerId) }
  }, [props.on, props.running])

  return (
    <div
      className={`${props.on ? 'light-cursor' : null} light light-color-${
        props.color
      }`}
    ></div>
  )
}
