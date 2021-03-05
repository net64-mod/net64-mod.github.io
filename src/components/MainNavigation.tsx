import * as React from 'react'

import Navigation from './Navigation'

const Header: React.FunctionComponent = () => (
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
        label: 'Servers',
        url: '/servers'
      },
      {
        label: 'Wiki',
        url: '/wiki'
      },
      {
        label: 'Social',
        url: '/social'
      }
    ]}
  />
)

export default Header
