import React, { useEffect } from 'react'
import './style.scss'
import mainPicture from '../../img/mainPicture.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

export const Main = () => {

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline()
      tl.fromTo('.box',{xPercent:100},{
        xPercent: 0,
        scrollTrigger: {
          trigger: '.main',
          scroller: '#main-container',
          start: '-20% top',
          end: '-10% top',
          scrub: 4,
          markers: true
        }
      })
 
    })
    return () => ctx.revert();
  },[])
  return (
    <main className='main' data-scroll-section>
      <section className='main__info'>
        <h1 className='main__info--h1'>Construye Tu Cuerpo Ideal</h1>
        <p className='main__info--p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero numquam fugiat debitis? Ipsa magnam nesciunt, ut consequatur dolore error. Dolore, quisquam ducimus alias est ullam aliquam suscipit beatae voluptates!
        Quo quia ratione eveniet laborum. Iure, ipsa. Accusantium veniam illum quo aliquam consequatur neque nobis eveniet nesciunt reprehenderit voluptas asperiores animi quibusdam, repudiandae dolor eius exercitationem officiis, ipsam doloribus autem.
        Magnam provident ab sapiente sed, placeat deserunt quasi fuga maxime corporis veritatis commodi, accusamus doloremque accusantium consequuntur atque minima non pariatur fugiat. Nam alias sunt praesentium eos fugit quam veniam.</p>
        <Link to='/rutinas' className='button'>Rutinas</Link>
      </section>
      <figure className='mainPicture'>
        <img src={mainPicture} alt="imagen producto" />
      </figure>
      <div className='box'></div>
    </main>
  )
}