import * as React from 'react'
import styled from '@emotion/styled'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
import { Link } from 'gatsby'

const StyledButton = styled.div`
  display: inline-flex;
  padding: ${getEmSize(6)}em;
  cursor: pointer;
  border: 1px solid black;
  border-radius: ${getEmSize(6)}em;
  background-color: yellow;
  color: black;
`

interface ButtonProps {
  to: string
  img?: string
}

const Button: React.SFC<ButtonProps> = ({ to, img, children }) => (
  <Link to={to}>
    {img && <img src={img} />}
    <StyledButton>{children}</StyledButton>
  </Link>
)

export default Button
