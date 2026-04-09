'use client'

import { useEffect } from "react";



export default function Cursor() {

useEffect(() => {
  const cursor = document.getElementById('cursor')
  const ring = document.getElementById('cursorRing')

  if (!cursor || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx - 5 + 'px';
      cursor.style.top = my - 5 + 'px';
    }

 
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx - 18 + 'px';
    ring.style.top = ry - 18 + 'px';
    requestAnimationFrame(animateRing);
  }
 
    document.addEventListener('mousemove', onMouseMove) 
    requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    }
 
},[])

  return (
    <div className="cursor" id ="cursor">
        <div id="cursor-ring" className="cursor-ring">

        </div>
    </div>
  )

}