import * as React from 'react'

import 'modern-normalize'
import '../styles/normalize'

import MainNavigation from '../components/MainNavigation'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Footer from '../components/Footer'

const IndexLayout: React.FunctionComponent = ({ children }) => (
  <LayoutRoot>
    <MainNavigation />
    <LayoutMain>{children}</LayoutMain>
    <Footer />
  </LayoutRoot>
)

export default IndexLayout
