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
            filter: drop-shadow(0 0 0.75rem ${theme.decorations});
            transition: all 0.2s linear;
          }
          .card:hover h3 {
            text-decoration: underline double;
          }
        `}</style>
        <style jsx>{`
          .card {
            display: block;
            margin: 1rem;
            padding: 1.5rem;
            min-width: 300px;
            max-width: 500px;
            text-align: left;
            color: ${theme.text};
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
