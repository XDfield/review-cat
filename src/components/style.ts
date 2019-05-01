import styled from 'styled-components';

interface IBlockProps {
  width?: string;
  height?: string;
}

export const Block = styled.div<IBlockProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  box-sizing: border-box;
`;

export const FlexBlock = styled(Block)`
  display: flex;
`;
