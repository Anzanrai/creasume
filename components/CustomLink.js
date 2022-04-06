import React from 'react';
import Link from 'next/link';

function CustomLink({ redirectPage, children }) {
  return (
    <Link href={redirectPage}>
      <a>{children}</a>
    </Link>
  );
}

export default CustomLink;
