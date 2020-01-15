import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const attrs = { className: 'nav-item nav-link', activeClassName: 'active' }
  const menu = ['/', '/dashboard', '/bank', '/send/uluna', '/send/ukrw']

  return (
    <div className="navbar-nav mr-auto">
      {menu.map(to => (
        <NavLink {...attrs} exact to={to} key={to}>
          {to.slice(1) || 'Station'}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
