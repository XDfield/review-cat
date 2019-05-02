import * as React from 'react';
import Toolbar, { TOOLBAR_HEIGHT } from 'containers/Toolbar';
import Statusbar, { STATUSBAR_HEIGHT } from 'containers/Statusbar';
import Sider from 'containers/Sider';
import Editor from 'containers/Editor';
import { Block, FlexBlock } from 'components/style';

interface IProps {}

class ReviewView extends React.Component<IProps> {
  private editor: React.RefObject<Editor>;

  constructor(props: IProps) {
    super(props);

    this.editor = React.createRef<Editor>();
  }

  changeLayout = () => {
    this.editor.current && this.editor.current.changeLayout();
  };

  get contentHeight(): string {
    return `calc(100% - ${TOOLBAR_HEIGHT + STATUSBAR_HEIGHT}px)`;
  }

  render() {
    return (
      <Block>
        <Toolbar />
        <FlexBlock height={this.contentHeight}>
          <Sider onWidthChange={this.changeLayout} />
          <Editor ref={this.editor} />
        </FlexBlock>
        <Statusbar />
      </Block>
    );
  }
}

export default ReviewView;
