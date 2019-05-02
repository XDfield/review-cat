import styled from 'styled-components';

interface IProps {
  color?: string;
  hoverColor?: string;
}

export const IconBlock = styled.div<IProps>`
  color: ${props => props.color || 'black'};
  :hover {
    color: ${props => props.hoverColor || 'black'};
  }
`;
