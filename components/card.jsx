import { ThemeContext } from "lib/hooks";
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
                        background-color: ${theme.hoverDecorations};
                        transition: all 0.2s linear;
                    }
                    .card:hover h3 {
                        text-decoration: underline double;
                    }
                `}</style>
                <style jsx>{`
                    .card {
                        border-radius: 2em;
                        display: block;
                        margin: 0.5rem;
                        padding: 1.5rem;
                        max-width: 800px;
                        text-align: left;
                        flex-grow: 1;
                    }

                    .card h3 {
                        margin: 0 0 1rem 0;
                        font-size: 1.5rem;
                        text-decoration: underline double;
                        color: ${theme.header};
                    }

                    .card p {
                        color: ${theme.text};
                        margin: 0;
                        font-size: 1rem;
                        line-height: 1.5;
                        font-style: italic;
                    }
                `}</style>
            </a>
        </Link>
    );
}
