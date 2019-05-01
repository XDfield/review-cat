import * as React from 'react';
import { Block } from 'components/style';

export const STATUSBAR_HEIGHT: number = 50;

interface IProps {}

export default class Statusbar extends React.Component<IProps> {
  render() {
    return <Block height={`${STATUSBAR_HEIGHT}px`}>Statusbar</Block>;
  }
}
