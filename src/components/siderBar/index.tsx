import * as React from 'react';
import { Block } from 'components/style';
import { ActionList, ActionItem } from './style';
import { IIconProps } from 'components/icon';

export const SIDERBAR_WIDTH: number = 50;

export interface ISiderBarActionIcon {
  type: React.ComponentType<IIconProps>;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
}

export interface ISiderBarAction {
  icon: ISiderBarActionIcon;
  label: string;
  showPanel: () => void;
  hidePanel: () => void;
}

interface IProps {
  actions: ISiderBarAction[];
}

export default ({ actions }: IProps) => {
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
    <Block width={`${SIDERBAR_WIDTH}px`}>
      <ActionList>
        {actions.map(action => {
          const color =
            select === action.label
              ? action.icon.activeColor
              : action.icon.color;
          return (
            <ActionItem onClick={handleClick(action)} key={action.label}>
              <action.icon.type color={color} size={20} />
            </ActionItem>
          );
        })}
      </ActionList>
    </Block>
  );
};
