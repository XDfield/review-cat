import styled from 'styled-components';

export const ActionList = styled.ul`
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  justify-content: flex-end;
`;

export const ActionItem = styled.li`
  display: block;
  position: relative;
  padding: 5px 0;
  cursor: pointer;
  transition: transform 50mx ease;
  text-align: center;
`;
