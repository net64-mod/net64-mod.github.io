import * as React from 'react'
import styled from '@emotion/styled'

import { getEmSize } from '../styles/mixins'
import { colors } from '../styles/variables'

const StyledNewsEntry = styled.div`
  padding: ${getEmSize(24)}em;
  margin: ${getEmSize(32)}rem 0;
  border-color: ${colors.gray.copy};
  border-radius: ${getEmSize(12)}em;
  background-color: ${colors.white};
  box-shadow: 0 5px 15px 3px ${colors.gray.copy};
  color: black;

  p:last-child {
    margin-bottom: 0;
  }
`

const StyledHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.brand.normal};
`

const StyledSubHeader = styled.div`
  font-size: 0.8rem;
  color: ${colors.gray.dark};
  margin-bottom: 1rem;
`

interface NewsEntryProps {
  author: string
  title: string
  date: Date
}

const NewsEntry: React.SFC<NewsEntryProps> = ({ author, title, date, children }): JSX.Element => {
  const timestamp = date.toLocaleDateString()
  return (
    <StyledNewsEntry>
      <StyledHeader>{title}</StyledHeader>
      <StyledSubHeader>
        {timestamp} - by {author}
      </StyledSubHeader>
      {children}
    </StyledNewsEntry>
  )
}

export default NewsEntry
