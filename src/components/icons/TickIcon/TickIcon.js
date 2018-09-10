import React from 'react';
import Icon from '../Icon/Icon';

const TickSvg = props => (
  <svg viewBox="90.471 302.809 823 823" width="16" height="16" {...props}>
    <path d="M365.407 1022.185L90.677 747.457l67.883-67.882L365.406 886.42l479.977-479.988 67.883 67.882" />
  </svg>
);

TickSvg.displayName = 'TickSvg';

const TickIcon = props => <Icon svgComponent={TickSvg} {...props} />;

TickIcon.displayName = 'TickIcon';

export default TickIcon;
