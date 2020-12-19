import { ThemeContext } from "lib/hooks";
import { useContext } from "react";
import Link from "next/link";

export default function Card({ children, title, subTitle, route, routeRef }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Link href={routeRef || route} as={route}>
            <a className="card">
                <h3>{title}</h3>
                <p>{subTitle}</p>
                {children}

                <style jsx>{`
                    .card {
                        border-radius: 2em;
                        display: block;
                        margin: 1em;
                        padding: 1.5em;
                        max-width: 800px;
                        text-align: left;
                        flex-grow: 1;
                        border: 1px solid transparent;
                    }

                    .card h3 {
                        margin: 0 0 1em 0;
                        font-size: 1.5em;
                        color: ${theme.header};
                    }

                    .card p {
                        color: ${theme.text};
                        margin: 0;
                        font-size: 1em;
                        line-height: 1.5;
                        font-style: italic;
                    }
                `}</style>
                <style jsx>{`
                    @media (hover: hover) {
                        .card:hover {
                            background-color: ${theme.hoverDecorations};
                            transition: all 0.2s linear;
                            border-color: ${theme.decorations};
                        }
                    }
                    @media (hover: none) {
                        .card {
                            border-color: ${theme.hoverDecorations};
                        }
                    }
                `}</style>
            </a>
        </Link>
    );
}
