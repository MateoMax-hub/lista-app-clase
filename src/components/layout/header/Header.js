import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='Header_container'>
      <Link to='home'>
        <Button variant='secondary'>Home</Button>
      </Link>
      <Link to='counter'>
        <Button variant='danger'>Counter</Button>
      </Link>
      <Link to='rick'>
        <Button variant='warning'>rick</Button>
      </Link>
    </div>
  )
}

export default Header;
