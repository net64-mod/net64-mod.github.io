import * as React from 'react'
import styled from '@emotion/styled'

const StyledMargin = styled.div`
  margin: ${({ margin }: Partial<MarginProps>) => margin};
`

interface MarginProps {
  margin: string
}

const Margin: React.FunctionComponent<MarginProps> = ({ margin }) => <StyledMargin margin={margin}></StyledMargin>

export default Margin
