import React from 'react'
import './style.scss'

import logo from '../../img/gymbro.png'

export const Navbar = () => {
  return (
    <nav className='navbar' data-scroll-section>
        <figure>
            <img src={logo} alt="logo gymbro" />
        </figure>
        <ul>
            <li>Inicio</li>
            <li>Rutinas</li>
            <li>Nosotros</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}
