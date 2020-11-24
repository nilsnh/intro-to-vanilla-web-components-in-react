import ReactDOM from 'react-dom'
import { useEffect, useState, useRef } from 'react'

export default function KindOfArmoredV2({ children }) {
  const mountTarget = useRef()
  const domRef = useRef(document.createElement('div'))
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const shadowRoot = domRef.current.attachShadow({ mode: 'closed' })
    mountTarget.current = document.createElement('div')
    shadowRoot.appendChild(mountTarget.current)
    setIsLoading(false)
  }, [])
  return (
    <>
      <div ref={domRef} />
      {!isLoading && ReactDOM.createPortal(children, mountTarget.current)}
    </>
  )
}
