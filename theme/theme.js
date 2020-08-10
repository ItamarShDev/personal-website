/* styles.js */
import css from "styled-jsx/css";
import ColorScheme from "@color_scheme";

// Resolved styles
export const link = css.resolve`
  a {
    color: ${ColorScheme.link};
  }
`;

export const Grid = css`
  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;
