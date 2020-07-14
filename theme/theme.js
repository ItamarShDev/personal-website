/* styles.js */
import css from "styled-jsx/css";
import ColorScheme from "@color_scheme";

// Resolved styles
export const link = css.resolve`
  a {
    color: ${ColorScheme.link};
  }
`;

// Scoped styles
export const footer = css`
  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer a {
    display: flex;
    margin: 5px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    filter: grayscale(100%) opacity(0.5);
  }
  footer a:hover {
    color: #0070f3;
    filter: none;
  }
  footer a img {
    height: 1rem;
    margin: auto 5px;
  }
  footer a img.medium {
    height: 0.9rem;
  }
  footer a img.twitter {
    height: 1.5rem;
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
