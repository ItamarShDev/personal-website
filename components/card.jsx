import { ThemeContext } from "lib/hooks";
import { useContext } from "react";
import Link from "next/link";

export default function Card({
    children = null,
    title,
    subTitle,
    route,
    routeRef,
}) {
    const { theme } = useContext(ThemeContext);
    return (
        <Link href={routeRef || route} as={route}>
            <a>
                <h3>{title}</h3>
                <p>{subTitle}</p>
                {children}

                <style jsx>{`
                    a {
                        border-radius: 2rem;
                        display: block;
                        margin: 1rem;
                        padding: 2rem;
                        text-align: left;
                        flex-grow: 1;
                        border: 1px solid ${theme.main};
                    }

                    h3 {
                        margin: 0 0 1em 0;
                        color: ${theme.header};
                    }

                    p {
                        color: ${theme.text};
                        filter: hue-rotate(180deg) sepia(0.7);
                        margin: 0;
                        font-size: 1.5em;
                        line-height: 1.5;
                        font-style: italic;
                    }
                `}</style>
                <style jsx>{`
                    @media only screen and (max-width: 968px) {
                        a {
                            text-align: center;
                        }
                    }
                    @media (hover: hover) {
                        a:hover {
                            transition: all 0.2s linear;
                            background-color: ${theme.hoverDecorations};
                        }
                    }
                `}</style>
            </a>
        </Link>
    );
}
