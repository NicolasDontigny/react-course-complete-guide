// our-domain.com/sub

import Link from 'next/link';
import { Fragment } from 'react';

export default function SubPage() {
  return (
    <Fragment>
      <h1>The Sub Page</h1>
      <ul>
        <li>
          {/* Used to keep SPA behavior, simple a tag would load from server */}
          <Link href="/sub/nextjs-is-a-great-framework">Item a1</Link>
        </li>
      </ul>
    </Fragment>
  )
}
