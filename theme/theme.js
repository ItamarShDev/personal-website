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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;
