import * as React from 'react'
import styled from '@emotion/styled'

import { getEmSize } from '../styles/mixins'

const StyledNewsEntry = styled.div`
  padding: ${getEmSize(24)}em;
  margin: ${getEmSize(32)}rem 0;
  border-radius: ${getEmSize(12)}em;
  background-color: lightgrey;
  color: black;

  p:last-child {
    margin-bottom: 0;
  }
`

const StyledHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const StyledSubHeader = styled.div`
  font-size: 0.8rem;
  color: grey;
  margin-bottom: 1rem;
`

interface NewsEntryProps {
  author: string
  title: string
  birthTime: string
  modifiedTime: string
}

const NewsEntry: React.SFC<NewsEntryProps> = ({ author, title, birthTime, modifiedTime, children }) => {
  const timestamp = new Date(birthTime).toLocaleDateString()
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
