import * as React from 'react';
import { IIconProps } from './index';
import { IconBlock } from './style';

const File = (props: IIconProps) => (
  <IconBlock color={props.color} hoverColor={props.hoverColor}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
  </IconBlock>
);

File.defaultProps = {
  size: 24,
};

export default File;
