import { css } from '@stitches/react';
import { global } from '@stitches/core';
import { colors } from '@radix-ui/colors';
import * as Icon from 'phosphor-react';

export const { styled, css: stitchesCss, theme, global: stitchesGlobal } = createCss({
  theme: {
    colors: {
      ...colors,
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      canvas: 'hsl(0,0%,93%)',
      panel: 'white',
      transparentPanel: 'hsl(0, 0%, 0%, 0.93)',
      shadowLight: 'hsl(206,22%,7%)',
      shadowDark: 'hsl(206,22%,7%)',
      tomato: 'hsl(6, 100%, 50%)',
      red: 'hsl(6, 78%, 60%)',
      crimson: 'hsl(340, 64%, 55%)',
      pink: 'hsl(322, 100%, 66%)',
      purple: 'hsl(252, 78%, 60%)',
      violet: 'hsl(262, 100%, 60%)',
      indigo: 'hsl(252, 100%, 60%)',
      blue: 'hsl(206, 100%, 50%)',
      cyan: 'hsl(172, 100%, 50%)',
      teal: 'hsl(192, 100%, 50%)',
      green: 'hsl(148, 60%, 40%)',
      lime: 'hsl(148, 100%, 40%)',
      yellow: 'hsl(52, 100%, 50%)',
      orange: 'hsl(38, 100%, 50%)',
      gold: 'hsl(40, 100%, 50%)',
      bronze: 'hsl(30, 100%, 50%)',
      gray: 'hsl(206, 22%, 49%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
  },
  utils: {
    p: () => (value) => ({
      padding: value,
    }),
    pt: () => (value) => ({
      paddingTop: value,
    }),
    pr: () => (value) => ({
      paddingRight: value,
    }),
    pb: () => (value) => ({
      paddingBottom: value,
    }),
    pl: () => (value) => ({
      paddingLeft: value,
    }),
    px: () => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: () => (value) => ({
      margin: value,
    }),
    mt: () => (value) => ({
      marginTop: value,
    }),
    mr: () => (value) => ({
      marginRight: value,
    }),
    mb: () => (value) => ({
      marginBottom: value,
    }),
    ml: () => (value) => ({
      marginLeft: value,
    }),
    mx: () => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: () => (value) => ({ textAlign: value }),
    fd: () => (value) => ({ flexDirection: value }),
    fw: () => (value) => ({ flexWrap: value }),
    ai: () => (value) => ({ alignItems: value }),
    ac: () => (value) => ({ alignContent: value }),
    jc: () => (value) => ({ justifyContent: value }),
    fg: () => (value) => ({ flexGrow: value }),
    fs: () => (value) => ({ flexShrink: value }),
    fb: () => (value) => ({ flexBasis: value }),
    bc: () => (value) => ({
      backgroundColor: value,
    }),
    br: () => (value) => ({
      borderRadius: value,
    }),
    btrr: () => (value) => ({
      borderTopRightRadius: value,
    }),
    bbrr: () => (value) => ({
      borderBottomRightRadius: value,
    }),
    bblr: () => (value) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: () => (value) => ({
      borderTopLeftRadius: value,
    }),
    bs: () => (value) => ({ boxShadow: value }),
    lh: () => (value) => ({ lineHeight: value }),
    ox: () => (value) => ({ overflowX: value }),
    oy: () => (value) => ({ overflowY: value }),
    pe: () => (value) => ({ pointerEvents: value }),
    userSelect: () => (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    size: () => (value) => ({
      width: value,
      height: value,
    }),
    appearance: () => (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelectNone: () => () => ({
      WebkitUserSelect: 'none',
      userSelect: 'none',
    }),
    userSelectAll: () => () => ({
      WebkitUserSelect: 'all',
      userSelect: 'all',
    }),
    pointerEventsNone: () => () => ({
      pointerEvents: 'none',
    }),
    pointerEventsAll: () => () => ({
      pointerEvents: 'all',
    }),
    wordBreak: () => (value) => ({ wordBreak: value }),
    overflowEllipsis: () => () => ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    overflowClip: () => () => ({
      overflow: 'hidden',
      textOverflow: 'clip',
      whiteSpace: 'nowrap',
    }),
    sizeWidth: () => (value) => ({
      width: value,
    }),
    sizeHeight: () => (value) => ({
      height: value,
    }),
    linearGradient: () => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const globalStyles = global({
  body: {
    backgroundColor: '$canvas',
    color: '$hiContrast',
    fontFamily: 'Inter, sans-serif',
    margin: 0,
    padding: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '*': {
    boxSizing: 'border-box',
  },
  'h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote, dl, dd': {
    margin: 0,
  },
  'ul, ol': {
    padding: 0,
    listStyle: 'none',
  },
  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },
  'input, button, textarea, select': {
    fontFamily: 'inherit',
  },
});

export const darkTheme = theme('dark-theme', {
  colors: {
    hiContrast: 'hsl(206,10%,85%)',
    loContrast: 'hsl(206,10%,5%)',
    canvas: 'hsl(206,10%,5%)',
    panel: 'hsl(206,10%,15%)',
    transparentPanel: 'hsl(0, 0%, 0%, 0.93)',
    shadowLight: 'hsl(206,22%,7%)',
    shadowDark: 'hsl(206,22%,7%)',
  },
});

export const utils = {
  flexCenter: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};

export const icons = Icon;