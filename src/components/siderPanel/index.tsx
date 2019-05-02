import * as React from 'react';
// import { SIDERBAR_WIDTH } from 'components/siderBar';
import { Block } from 'components/style';

export const SIDERPANEL_DEFAULT_WIDTH = 250;

interface IProps {}

interface IState {
  width: number;
}

export default class SiderPanel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      width: SIDERPANEL_DEFAULT_WIDTH,
    };
  }

  render() {
    return (
      <Block style={{ width: this.state.width }}>
        <Block>{this.props.children}</Block>
      </Block>
    );
  }
}
