/* eslint-disable no-unused-expressions */

const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('./parts/flattenColorPalette');
const toColorValue = require('./parts/toColorValue');

module.exports = plugin(
  function ({ matchUtilities, addUtilities, theme }) {
    addUtilities({
      '[class^="link-effect"]': {
        '&:hover': {
          '[class^="link-underline"]': {
            'background-size': `100% var(--link-effect-size)`,
          },
        },
      },
    });
    matchUtilities(
      {
        'link-underline': value => ({
          'background-size': `0 ${value}`,
          'border-bottom-width': 0,
          'background-image':
            'linear-gradient(transparent, transparent),linear-gradient(#fff, #fff)',
          'background-position': '0 100%',
          'background-repeat': 'no-repeat',
          transition: 'background-size 0.5s ease-in-out',
          '&:hover': {
            'background-position': '0 100%',
            'background-size': `100% ${value}`,
          },
        }),
      },
      { values: theme('linkUnderline') }
    );
    matchUtilities(
      {
        'link-effect': value => ({
          '--link-effect-size': value,
        }),
      },
      { values: theme('linkUnderline') }
    );
    matchUtilities(
      {
        'link-underline': value => ({
          'background-image': `linear-gradient(transparent, transparent),
          linear-gradient(${toColorValue(value)}, ${toColorValue(value)})`,
        }),
      },
      {
        values: flattenColorPalette(theme('boxShadowColor')),
        type: ['color'],
      }
    );
  },
  {
    theme: {
      linkUnderline: {
        DEFAULT: '2px',
        xs: '1px',
        sm: '4px',
        md: '8px',
        lg: '10px',
        xl: '12px',
      },
    },
  }
);
