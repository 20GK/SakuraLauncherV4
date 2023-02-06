import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderApp() {
  return (
    <div className='sidebar-main'>
      <Link to='/' className='sidebar-homeMain'>
        <div className='sidebar-homeLogo'></div>
      </Link>
      <ul className='sidebar-navPills'>

        {/* second element */}
        <li className='sidebar-navItems'>
          <Link to='/servers' className="sidebar-Elements">
            <div className='sidebar-Element1'></div>
          </Link>
        </li>

        {/* third element */}
        <li className='sidebar-navItems'>
          <Link to='*' className='sidebar-Elements' aria-current='page'>
            <div className='sidebar-Element2'></div>
          </Link>
        </li>

        {/* fourth element */}
        <li className='sidebar-navItems'>
          <Link to='*' className='sidebar-Elements' aria-current='page'>
            <div className='sidebar-Element4'></div>
          </Link>
        </li>

        {/* fifth element */}
        <li className='sidebar-navItems'>
          <Link to='*' className='sidebar-Elements' aria-current='page'>
            <div className='sidebar-Element5'></div>
          </Link>
        </li>
      </ul>
      <div className='sidebar-account'></div>
    </div>
  );
};