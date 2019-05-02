import * as React from 'react';
import { Block, FlexBlock } from 'components/style';
import { SIDERBAR_WIDTH } from 'components/siderBar';
import Resizer from './resizer';

export const SIDERPANEL_DEFAULT_WIDTH = 250;
export const MIN_SIDERPANEL_WIDTH = 170;
// 侧边栏最大到排除 siderBar 后的 80% 宽度
export const MAX_SIDERPANEL_RATE = 0.8;

interface IProps {
  onResize?: () => void;
}

interface IState {
  width: number;
  isResizing: boolean;
  original: {
    x: number;
    width: number;
  };
}

export default class SiderPanel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      width: SIDERPANEL_DEFAULT_WIDTH,
      isResizing: false,
      original: {
        x: 0,
        width: 0,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseleave', this.onMouseUp);
    window.addEventListener('touchmove', this.onMouseMove);
    window.addEventListener('touchend', this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseleave', this.onMouseUp);
    window.removeEventListener('touchmove', this.onMouseMove);
    window.removeEventListener('touchend', this.onMouseUp);
  }

  onResizeStart = (event: React.MouseEvent | React.TouchEvent) => {
    let clientX = 0;
    if (event.nativeEvent instanceof MouseEvent) {
      // 忽略右键点击
      if (event.nativeEvent.which === 3) {
        return;
      }
      clientX = event.nativeEvent.clientX;
    } else if (event.nativeEvent instanceof TouchEvent) {
      clientX = event.nativeEvent.touches[0].clientX;
    } else {
      return;
    }

    this.setState(({ width }) => ({
      isResizing: true,
      original: {
        x: clientX,
        width,
      },
    }));
  };

  onMouseMove = (event: MouseEvent | TouchEvent) => {
    if (!this.state.isResizing) return;
    const { original } = this.state;
    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const newWidth = original.width + (clientX - original.x);
    const maxWidth =
      (document.body.offsetWidth - SIDERBAR_WIDTH) * MAX_SIDERPANEL_RATE;
    if (newWidth >= MIN_SIDERPANEL_WIDTH && newWidth <= maxWidth) {
      this.setState({ width: newWidth });
      this.props.onResize && this.props.onResize();
    }
  };

  onMouseUp = () => {
    if (!this.state.isResizing) return;
    this.setState({ isResizing: false });
  };

  render() {
    return (
      <FlexBlock style={{ width: this.state.width, position: 'relative' }}>
        <Block>{this.props.children}</Block>
        <Resizer
          onMouseDown={this.onResizeStart}
          onTouchStart={this.onResizeStart}
        />
      </FlexBlock>
    );
  }
}
