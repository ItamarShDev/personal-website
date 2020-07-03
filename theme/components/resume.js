import css from "styled-jsx/css";
export const JobCard = css`
   .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px;
      margin-left: 50px;
      padding: 5px;
      position: relative;
      max-width: 500px;
      border-bottom: 0.02rem #808080 dotted;
      filter: none;
   }

   .card.opac {
      opacity: 0.5;
      transition: opacity 0.2s linear;
      filter: grayscale(100%) blur(1px);
   }

   .job {
      display: flex;
      flex-direction: column;
   }
   .title {
      font-size: 1.2rem;
      margin-block-end: 0.2rem;
   }
   .company {
      display: flex;
      font-size: 0.9rem;
      font-style: italic;
      align-items: center;
      color: grey;
   }
   .company:before {
      content: "@";
      font-style: italic;
      opacity: 0.5;
      font-size: 0.5rem;
      margin: 0 5px;
   }
   .logo {
      position: absolute;
      height: 1.2rem;
      width: 100px;
      display: flex;
      align-items: center;
      top: 20px;
      right: -10px;
      transform: rotate(30deg);
   }

   .logo .image {
      position: relative;
      height: inherit;
      width: auto;
      margin: 0 auto;
   }
   .summary {
      font-size: 1rem;
      break-after: always;
      white-space: wrap;
   }
   .extra {
      height: 0;
      overflow: hidden;
      font-size: 0.7rem;
      font-style: normal;
   }

   .card:hover p.extra {
      height: 100px;
      transition: height 0.2s ease;
      transition: font-style 5s linear;
      font-style: italic;
   }

   .tags {
      font-size: 0.7rem;
      color: grey;
   }
   .row {
      display: flex;
      flex-direction: row;
   }
   li {
      transform: translate(-30px);
   }
   .duration {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: inherit;
      width: 50px;
      position: relative;
      color: grey;
      font-size: 0.7rem;
   }
   .duration .from {
      transform: translateX(-120%);
   }
   .duration .to {
      transform: translateY(-100%);
   }

   li:hover {
      transition: transform 0.2s ease-out;
      transform: scale(1.1);
   }

   li:hover .duration {
      color: black;
      font-size: 1rem;
      margin-right: 10px;
   }
`;
