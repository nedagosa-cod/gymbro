import React, { useEffect } from 'react'
import './style.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Main = () => {

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.main',
          scroller: '#main-container',
          start: '-10% top',
          end: '-10% top',
          scrub: 3,
          markers: true
        }
      })
      tl.fromTo('.box',{xPercent:100},{
        xPercent: 0
      })
    })
    return () => ctx.revert();
  },[])
  return (
    <main className='main' data-scroll-section>
      <div className='box'></div>
    </main>
  )
}