import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='ui fixed menu'>
      <div style={{ marginTop: '10px', marginBottom: '2px' }} className='ui container center' >
        <h2 >Coder Shoper</h2>
        <Link  to={`/category`}>
        <ul style={{ listStyle: 'none', marginTop: '9px', marginBottom: '5px' }}>
          <li> Category</li>
        </ul>
        </Link>
      </div>
    </div>
  )
};

export default Header;