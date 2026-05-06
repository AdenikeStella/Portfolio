'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current

    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx - 5 + 'px'
      cursor.style.top = my - 5 + 'px'
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx - 18 + 'px'
      ring.style.top = ry - 18 + 'px'
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    animateRing()

    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}