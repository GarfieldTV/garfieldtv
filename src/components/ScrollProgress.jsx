import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const v = max > 0 ? (window.scrollY / max) * 100 : 0
      setP(Math.min(100, Math.max(0, v)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-bmw-blue transition-[width] duration-100 ease-out"
        style={{ width: `${p}%` }}
      />
    </div>
  )
}
