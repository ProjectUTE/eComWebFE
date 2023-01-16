import React from 'react';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

function Header() {
  return (
    <header className="header--style-1 header--box-shadow">
      <PrimaryNav />
      <SecondaryNav />
    </header>
  );
}

export default Header;
