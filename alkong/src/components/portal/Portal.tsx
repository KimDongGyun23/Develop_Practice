import { type PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: PropsWithChildren) => {
  const [container, setContainer] = useState<Element | null>(null)

  useEffect(() => {
    if (document) {
      setContainer(document.body)
    }
  }, [])

  if (!container) return null

  return createPortal(<>{children}</>, container)
}

export default Portal
