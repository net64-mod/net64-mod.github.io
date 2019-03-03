import * as React from 'react'

import Navigation from './Navigation'


const Header: React.SFC = () => (
    <Navigation
      links={[
        {
          label: 'Home',
          url: '/'
        },
        /*{
          label: 'About',
          url: '/about'
        },*/
        {
          label: 'Download',
          url: '/download'
        },
        /*{
          label: 'Blog',
          url: '/blog'
        },
        {
          label: 'FAQ',
          url: '/faq'
        },*/
        {
          label: 'Wiki',
          url: '/wiki/main'
        },
        /*{
          label: 'Contribute',
          url: '/contribute'
        },*/
        {
          label: 'Social',
          url: 'social'
        }
      ]}
    />
)

export default Header
