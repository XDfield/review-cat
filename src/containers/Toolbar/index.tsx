import * as React from 'react';
import { Block } from 'components/style';

export const TOOLBAR_HEIGHT: number = 50;

interface IProps {}

export default class Toolbar extends React.Component<IProps> {
  render() {
    return <Block height={`${TOOLBAR_HEIGHT}px`}>Toolbar</Block>;
  }
}
