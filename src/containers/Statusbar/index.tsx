import * as React from 'react';
import { Block } from 'components/style';
import { withTheme, IThemeable } from 'components/theme';

export const STATUSBAR_HEIGHT: number = 50;

interface IProps extends IThemeable {}

class Statusbar extends React.Component<IProps> {
  get containerStyle(): React.CSSProperties {
    const { theme } = this.props;
    return {
      backgroundColor: theme.getColor('statusBar.background'),
      color: theme.getColor('statusBar.foreground'),
    };
  }

  render() {
    return (
      <Block height={`${STATUSBAR_HEIGHT}px`} style={this.containerStyle}>
        Statusbar
      </Block>
    );
  }
}

export default withTheme(Statusbar);
