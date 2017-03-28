'use strict';

// main color
const mainColor = '#60f8eb';
const backgroundColor = '#FDFDFD';
const foregroundColor = '#021923';

const colors = {

  // Colors
  black: foregroundColor,
  white: '#FFFFFF',
  red: '#dd2e37',
  green: '#07c679',
  blue: '#1B306E',
  cyan: '#23c1c8',
  yellow: '#ffd200',
  magenta: '#5821c7',
  white: '#c5e1df',

  // Light Colors
  lightBlack: foregroundColor,
  lightRed: '#dd2e37',
  lightGreen: '#07c679',
  lightYellow: '#ffd200',
  lightBlue: '#29467A',
  lightMagenta: '#5821c7',
  lightCyan: '#23c1c8',
  lightWhite: '#FFFFFF'
};

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    borderColor: mainColor,
    cursorColor: mainColor,
    cursorShape: 'BLOCK',
    colors,
    termCSS: `
            ${config.termCSS || ''}
            ::selection {
                 background: ${mainColor} !important;
            }
        `,
    // CSS setting
    css: `
      ${config.css || ''}

      ::selection {
         background: ${mainColor} !important;
      }

      .tabs_list .tab_tab .tab_text,
      .tab_icon {
        color: ${colors.white};
      }

      .tabs_list .tab_tab.tab_active .tab_text,
      .tabs_title,
      .tab_icon:hover {
        color: ${foregroundColor};
        font-weight: bold;
      }

      .tab_icon .shape_wom {
        width: 10px;
        height: 10px;
        top: 2px;
        left: 2px;
     }
    `
  })
);