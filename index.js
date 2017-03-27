'use strict';

// main color
const mainColor = '#4af7cf';
const backgroundColor = '#FDFDFD';
const foregroundColor = '#021a1d';

const colors = {

  // Colors
  black: '#000000',
  white: '#FFFFFF',
  red: '#FA2D48',
  green: '#11CB80',
  blue: '#1B306E',
  cyan: '#2ac7d8',
  yellow: '#FFBF01',
  magenta: '#6530CF',
  white: '#d0e3e5',

  // Light Colors
  lightBlack: '#000000',
  lightRed: '#FA2D48',
  lightGreen: '#11CB80',
  lightYellow: '#FFBF01',
  lightBlue: '#29467A',
  lightMagenta: '#6530CF',
  lightCyan: '#2ac7d8',
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