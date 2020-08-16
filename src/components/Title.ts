import styled from 'styled-components'

export const Title = styled.span<{size: string}>`
  color: white;
  font-size: ${props => props.size};
  font-weight: bold;
`