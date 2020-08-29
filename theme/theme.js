/* styles.js */
import css from "styled-jsx/css";

export function grid(cols = 2, rows = 2, gap = 0) {
  return css.resolve`
    div {
      display: grid;
      grid-template: repeat(${rows}, 1fr) / repeat(${cols}, 1fr);
      grid-gap: ${gap}px;
      justify-content: center;
      align-items: center;
    }
  `;
}

export const gridItem = css`
  .item {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

export function centered(isColumns = false, centerText = false) {
  return css.resolve`
    div {
      display: flex;
      flex-direction: ${isColumns ? "column" : "row"};
      justify-content: center;
      align-items: center;
      text-align: ${centerText ? "center" : ""};
    }
  `;
}
