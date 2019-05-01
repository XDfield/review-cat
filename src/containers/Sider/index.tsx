import * as React from 'react';
import { Block } from 'components/style';
import SiderBar from 'components/siderBar';

interface IProps {}

export default class Sider extends React.Component<IProps> {
  render() {
    return (
      <Block width="auto">
        <SiderBar />
      </Block>
    );
  }
}
