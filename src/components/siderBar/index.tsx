import * as React from 'react';
import { Block } from 'components/style';
import { ActionList, ActionItem } from './style';
import { IIconProps } from 'components/icon';
import { withTheme, IThemeable } from 'components/theme';

export const SIDERBAR_WIDTH: number = 50;

export interface ISiderBarAction {
  icon: React.ComponentType<IIconProps>;
  label: string;
  showPanel: () => void;
  hidePanel: () => void;
}

interface IProps extends IThemeable {
  actions: ISiderBarAction[];
}

const SiderBar = ({ actions, theme }: IProps) => {
  const defaultSelect = actions.length === 0 ? '' : actions[0].label;
  const [select, setSelect] = React.useState(defaultSelect);

  const handleClick = (action: ISiderBarAction) => {
    return () => {
      if (select === action.label) {
        action.hidePanel();
        setSelect('');
      } else {
        const currentAction = actions.find(a => a.label === select);
        currentAction && currentAction.hidePanel();
        action.showPanel();
        setSelect(action.label);
      }
    };
  };

  return (
    <Block
      width={`${SIDERBAR_WIDTH}px`}
      style={{ backgroundColor: theme.getColor('activityBar.background') }}
    >
      <ActionList>
        {actions.map(action => {
          const color =
            select === action.label
              ? theme.getColor('activityBar.foreground')
              : theme.getColor('activityBar.inactiveForeground');
          return (
            <ActionItem onClick={handleClick(action)} key={action.label}>
              <action.icon
                color={color}
                hoverColor={theme.getColor('activityBar.foreground')}
                size={30}
              />
            </ActionItem>
          );
        })}
      </ActionList>
    </Block>
  );
};

export default withTheme(SiderBar);
