import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { Navbar } from '../navbar/Navbar'

export const Header = () => {
  return (
    <header className='header' data-scroll-section>
        <Navbar />
        <article className='titles'>
            <h2>ALIMENTA TU</h2>
            <h1><span>CUERPO</span> FITNESS</h1>
            <h3>"Unidos en el esfuerzo, forjamos cuerpos y amistades duraderas: Tu Gymbro, tu apoyo constante en cada repetición y más allá."</h3>
            <Link className='button' to="/register">Se uno de nosotros</Link>
        </article>
    </header>
  )
}
