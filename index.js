// main color
const mainColor = "#67dee4";
const backgroundColor = "#E7F1F4";
const foregroundColor = "#013733";

const borderColor = mainColor;
const cursorColor = mainColor;

const padding = "12px 2px 12px 12px";

const cursorShape = "BLOCK";
const colors = {
  // Colors
  black: foregroundColor,
  white: "#FFFFFF",
  red: "#f75f5e",
  green: "#06c9a3",
  blue: "#01629d",
  cyan: "#13b4cb",
  yellow: "#ffd36b",
  magenta: "#8032d8",
  white: "#d5e4e4",

  // Light Colors
  lightBlack: foregroundColor,
  lightRed: "#f75f5e",
  lightGreen: "#06c9a3",
  lightYellow: "#ffd36b",
  lightBlue: "#01629d",
  lightMagenta: "#8032d8",
  lightCyan: "#13b4cb",
  lightWhite: "#d5e4e4"
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    padding,
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorShape,
    colors,
    // CSS setting
    css: `
      ${config.css || ""}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .hyper_main {
        border: solid 2px ${mainColor};
      }
      .tabs_nav {
      	background-color: #cfe7ed;
      }
      .tab_tab {
        color: #8e9191;
        background-color:#cfe7ed;
				border-color: ${borderColor};
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: ${foregroundColor};
        background-color: ${backgroundColor};
        .tab_textInner, .tab_icon {
        svg {
            fill: ${foregroundColor} !important;
          }
        }
      }
      .tab_textInner, .tab_icon, .tabs_title {
        svg {
          fill: #8e9191 !important;
        }
      }
    `
  });
};
