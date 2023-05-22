import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { Navbar } from '../navbar/Navbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Header = () => {

  useEffect(()=>{
    const context = gsap.context(()=> {
      const tl = gsap.timeline()
      tl.fromTo('.navbar',{opacity:0, scale:0},{
        opacity:1,
        duration: 1,
        scale:1
      })
      tl.fromTo('.titles',{y:-30},{
        y: 0,
        duration: 1,
      },0)
      .fromTo('.button',{opacity: 0},{
        opacity: 1,
        direction: 2,
        duration: 1,
      },1)
      
    })
    return () => context.revert();
  },[])

  return (
    <header className='header' data-scroll-section>
        <Navbar className='navbar'/>
        <article className='titles'>
            <h2>ALIMENTA TU</h2>
            <h1><span>CUERPO</span> FITNESS</h1>
            <h3>"Unidos en el esfuerzo, forjamos cuerpos y amistades duraderas: Tu Gymbro, tu apoyo constante en cada repetición y más allá."</h3>
            <Link className='button' to="/register">Se uno de nosotros</Link>
        </article>
    </header>
  )
}
