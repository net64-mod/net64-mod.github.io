import * as React from 'react'
import styled from '@emotion/styled'

import { getEmSize } from '../styles/mixins'

interface ProgressSpinnerProps {
  inline?: boolean
}

const ProgressSpinnerWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${({ inline }: ProgressSpinnerProps) =>
    inline
      ? ''
      : `
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
  `}
`

const ProgressSpinnerStyled = styled.div`
  width: ${getEmSize(80)}rem;
  height: ${getEmSize(80)}rem;
  border-radius: 50%;
  border: 7px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.6);
  animation: rotate 800ms linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export class ProgressSpinner extends React.PureComponent<ProgressSpinnerProps> {
  public render(): JSX.Element {
    const { inline } = this.props
    return (
      <ProgressSpinnerWrapperStyled inline={inline}>
        <ProgressSpinnerStyled />
      </ProgressSpinnerWrapperStyled>
    )
  }
}
