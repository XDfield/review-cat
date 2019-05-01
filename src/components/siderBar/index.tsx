import * as React from 'react';
import { Block } from 'components/style';

export const SIDERBAR_WIDTH: number = 50;

interface IProps {}

export default class SiderBar extends React.Component<IProps> {
  render() {
    return <Block width={`${SIDERBAR_WIDTH}px`}>Bar</Block>;
  }
}
