import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ height: '80px', width: '100%' }}>
        <div style={{ marginRight: '10px' }}>
          <Link href="/">Home</Link>
        </div>
        
        <div style={{ marginRight: '10px' }}>
          <Link href="/about">About</Link>
        </div>

        <div style={{ marginRight: '10px' }}>
          <Link href="/contact">Contact</Link>
        </div>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
