import { ThemeContext } from "lib/hooks";
import { useContext } from "react";
import Link from "next/link";

export default function LinkCard({
    children = null,
    title,
    subTitle,
    route,
    routeRef,
}) {
    const { theme } = useContext(ThemeContext);
    return (
        <Link href={routeRef || route} as={route}>
            <dl>
                <dt>
                    <h3>{title}</h3>
                </dt>
                <dd>{subTitle}</dd>
                {children}

                <style jsx>{`
                    dl {
                        border-radius: 2rem;
                        display: block;
                        margin: 1rem;
                        padding: 2rem;
                        text-align: left;
                        flex-grow: 1;
                        text-decoration: none;
                    }

                    dt {
                        margin: 0 0 1em 0;
                        color: ${theme.header};
                    }

                    dd {
                        color: ${theme.text};
                        filter: hue-rotate(180deg) sepia(0.7);
                        margin: 0 10px;
                        font-size: 1.5em;
                        line-height: 1.5;
                        font-style: italic;
                    }
                `}</style>
                <style jsx>{`
                    @media only screen and (max-width: 968px) {
                        dl {
                            text-align: center;
                        }
                    }
                    @media (hover: hover) {
                        dl:hover h3 {
                            transition: all 0.2s linear;
                            text-decoration: underline double 1px ${theme.text};
                        }
                    }
                `}</style>
            </dl>
        </Link>
    );
}
