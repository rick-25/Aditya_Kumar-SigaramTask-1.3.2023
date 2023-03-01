import React from 'react'
import { Link } from 'react-router-dom'

function NavButton({ title, link }) {
  return (
    <Link to={link}>
      <div className='shadow-md p-2 rounded-md bg-blue-600 text-white'>{title}</div>
    </Link>
  )
}

function Homepage() {
  return (
    <div className='flex h-screen justify-center items-center gap-5'>
      <NavButton link='game' title='Matrix game' />
      <NavButton link='shop' title='Shoping site' />
    </div>
  )
}

export default Homepage