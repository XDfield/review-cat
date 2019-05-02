import * as React from 'react';
import { FlexBlock } from 'components/style';
import SiderBar, { ISiderBarAction } from 'components/siderBar';
import SiderPanel from 'components/siderPanel';
import Icon, { IIconProps } from 'components/icon';

interface IProps {
  onWidthChange?: () => void;
}

interface IState {
  selectPanel: string;
}

export default class Sider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectPanel: 'explorer',
    };
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.selectPanel !== this.state.selectPanel) {
      this.props.onWidthChange && this.props.onWidthChange();
    }
  }

  genAction = (
    label: string,
    type: React.ComponentType<IIconProps>
  ): ISiderBarAction => {
    return {
      icon: {
        type,
        color: '#ddd',
        hoverColor: '#000',
        activeColor: '#000',
      },
      label,
      showPanel: () => {
        this.setState({ selectPanel: label });
      },
      hidePanel: () => {
        this.setState({ selectPanel: '' });
      },
    };
  };

  renderPanel = () => {
    const { selectPanel } = this.state;
    if (selectPanel === '') {
      return null;
    }

    return <SiderPanel>{selectPanel}</SiderPanel>;
  };

  get siderBarActions(): ISiderBarAction[] {
    return [
      this.genAction('explorer', Icon.File),
      this.genAction('explorer2', Icon.File),
    ];
  }

  render() {
    return (
      <FlexBlock width="auto">
        <SiderBar actions={this.siderBarActions} />
        {this.renderPanel()}
      </FlexBlock>
    );
  }
}
