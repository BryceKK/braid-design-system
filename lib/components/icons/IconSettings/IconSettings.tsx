import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSettingsSvg } from './IconSettingsSvg';

export type IconSettingsProps = UseIconProps;

export const IconSettings = (props: IconSettingsProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSettingsSvg} {...iconProps} />;
};
