import * as React from 'react';
import { Block } from 'components/style';
import { withTheme, IThemeable } from 'components/theme';

export const TOOLBAR_HEIGHT: number = 50;

interface IProps extends IThemeable {}

class Toolbar extends React.Component<IProps> {
  get containerStyle(): React.CSSProperties {
    const { theme } = this.props;
    return {
      backgroundColor: theme.getColor('titleBar.activeBackground'),
      color: theme.getColor('titleBar.activeForeground'),
    };
  }

  render() {
    return (
      <Block height={`${TOOLBAR_HEIGHT}px`} style={this.containerStyle}>
        Toolbar
      </Block>
    );
  }
}

export default withTheme(Toolbar);
