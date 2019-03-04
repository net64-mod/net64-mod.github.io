import * as React from 'react'

import Navigation from './Navigation'

const Header: React.SFC = () => (
  <Navigation
    links={[
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Download',
        url: '/download'
      },
      {
        label: 'Wiki',
        url: '/wiki'
      },
      {
        label: 'Social',
        url: 'social'
      }
    ]}
  />
)

export default Header
