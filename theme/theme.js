/* styles.js */
import css from "styled-jsx/css";

export function grid({
  cols = 2,
  rows = 2,
  gap = 0,
  height = "auto",
  width = "auto",
}) {
  return css.resolve`
    div {
      display: grid;
      grid-template: repeat(${rows}, 1fr) / repeat(${cols}, 1fr);
      grid-gap: ${gap}px;
      justify-content: center;
      align-items: center;
      height: ${height};
      width: ${width};
    }
  `;
}
export function invertByTheme(isDark) {
  console.log(isDark);
  return css.resolve`
    div {
      filter: invert(${isDark ? 1 : 0});
    }
  `;
}
export const gridItem = () =>
  css.resolve`
    .item {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
  `;

export function centered({
  isColumns = false,
  centerText = false,
  selector = "div",
}) {
  return css.resolve`
    ${selector} {
      display: flex;
      flex-direction: ${isColumns ? "column" : "row"};
      justify-content: center;
      align-items: center;
      text-align: ${centerText ? "center" : "start"};
    }
  `;
}

export function mainContent({ selector = "div" }) {
  return css.resolve`
    ${selector} {
      min-width: 800px;
      width: 80%;
      max-width: 1200px;
      margin: auto;
    }
  `;
}
