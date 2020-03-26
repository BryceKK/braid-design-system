import { style } from 'sku/treat';
import * as zIndex from '../private/zIndex';
// export const headerHeight = 60;

export const headerHeight = style({ height: 60 });

export const header = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  // height: `${headerHeight}px`,
});

export const buttonLink = style({
  ':hover': {
    textDecoration: 'none',
  },
});

export const tab2 = style({
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const selectionOnHover = style(theme => ({
  // height: `${headerHeight}px`,
  ':hover': {
    background: theme.color.background.selection,
    // textDecoration: 'none',
  },
}));

export const menuCheckbox = style({});
export const menuCheckboxLabel = style({});
export const menuCheckboxLabelFocus = style({
  left: -4,
  right: -1,
  selectors: {
    [`${menuCheckbox}:focus ~ ${menuCheckboxLabel} &`]: {
      opacity: 1,
    },
  },
});
export const menuChevron = style({
  selectors: {
    [`${menuCheckbox}:checked ~ ${menuCheckboxLabel} &`]: {
      transform: 'rotate(180deg)',
    },
  },
});
export const menuContents = style({});
export const mobileMenu = style({
  top: 60,
  opacity: 0,
  transform: 'translateY(-4px)',
  zIndex: zIndex.headerOverlay,
  selectors: {
    [`${menuCheckbox}:checked ~ ${menuContents} &`]: {
      opacity: 1,
      transform: 'none',
      pointerEvents: 'auto',
    },
  },
});
export const desktopMenu = style({
  opacity: 0,
  transform: 'translateY(-4px)',
  zIndex: 2,
  top: '100%',
  selectors: {
    [`${menuCheckbox}:checked ~ ${menuContents} &`]: {
      opacity: 1,
      transform: 'none',
      pointerEvents: 'auto',
    },
  },
});
export const menuBackdrop = [
  style({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  }),
  style(theme =>
    theme.utils.responsiveStyle({
      tablet: {
        selectors: {
          [`${menuCheckbox}:checked ~ &`]: {
            // background: 'rgba(0,0,0,0.2)',
            display: 'block',
          },
        },
      },
    }),
  ),
];

export const menuItem = style(theme => ({
  selectors: {
    '&:hover': {
      background: theme.color.background.selection,
    },
  },
}));
