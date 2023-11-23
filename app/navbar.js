// import React from 'react';
// import Link from 'next/link';

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ height: '80px', width: '100%' }}>
//         <div style={{ marginRight: '10px' }}>
//           <Link href="/">Home</Link>
//         </div>
        
//         <div style={{ marginRight: '10px' }}>
//           <Link href="/about">About</Link>
//         </div>

//         <div style={{ marginRight: '10px' }}>
//           <Link href="/contact">Contact</Link>
//         </div>

//         <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



// components/Navbar.js





// Import next/navigation instead of next/router

"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ height: '80px', width: '100%' }}>
        <NavItem path="/" currentPath={router.home}>Home</NavItem>
        <NavItem path="/about" currentPath={router.about}>About</NavItem>
        <NavItem path="/contact" currentPath={router.contact}>Contact</NavItem>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
}

const NavItem = ({ path, currentPath, children }) => {
  const isActive = currentPath === path;

  return (
    <div
      style={{ marginRight: '10px', cursor: 'pointer', fontWeight: isActive ? 'bold' : 'normal' }}
    >
      <Link href={path}>
        {children}
      </Link>
    </div>
  );
};

export default Navbar;




