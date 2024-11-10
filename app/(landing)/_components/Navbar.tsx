
'use client';

import React, { useEffect } from 'react';
import Spinner from '@/components/spinner';
import useScrollTop from '@/hooks/useScrollTop';

const Navbar = () => {
  useScrollTop();

  return (
    <nav className="navbar">
      <Spinner />
      <div>Navigation Bar</div>
    </nav>
  );
};

export default Navbar;
