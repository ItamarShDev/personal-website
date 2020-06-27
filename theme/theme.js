/* styles.js */
import css from "styled-jsx/css";
import { Card as CardTheme } from "./components/card";
import { JobCard as JobCardTheme } from "./components/resume";
import { Blog as BlogTheme } from "./components/blog";
export const Card = CardTheme;
export const JobCard = JobCardTheme;
export const Blog = BlogTheme;

// Resolved styles
export const link = css.resolve`
   a {
      color: green;
   }
`;

export default css.global`
   header {
      height: 60px;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      position: sticky;
      top: 0;
      background-color: rgba(255, 255, 255, 0.9);
      z-index: 10;
   }

   .container {
      min-height: 100vh;
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;
   }

   main {
      padding: 1rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   a {
      color: inherit;
      text-decoration: none;
   }

   .logo {
      height: 1em;
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
      border-color: #0070f3;
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
