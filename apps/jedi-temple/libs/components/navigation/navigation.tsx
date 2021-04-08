import Link from 'next/link';
import * as React from 'react';

export function Navigation() {
  return (
    <nav>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Home</a>
      </Link>
    </nav>
  );
}

export default Navigation;
