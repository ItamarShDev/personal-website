import { ThemeContext } from "@hooks";
import { useContext } from "react";
import Link from "next/link";

export default function Card({ children, title, subTitle, route, routeRef }) {
  const { theme } = useContext(ThemeContext);
  if (!routeRef) routeRef = route;
  return (
    <Link href={routeRef} as={route}>
      <a className="card">
        <h3>{title}</h3>
        <p>{subTitle}</p>
        {children}
        <style jsx>{`
          .card:hover {
            box-shadow: 1px 1px 10px ${theme.decorations};
            transition: all 0.2s linear;
            color: ${theme.decorations};
            border-color: ${theme.decorations};
          }
        `}</style>
        <style jsx>{`
          .card {
            display: block;
            box-sizing: border-box;
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            min-width: 300px;
            text-align: left;
            color: ${theme.text};
            text-decoration: none;
            border: 1px solid;
            border-color: ${theme.decoration};
            border-radius: 10px;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}</style>
      </a>
    </Link>
  );
}
