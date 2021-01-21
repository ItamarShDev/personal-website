import { useContext } from "react";
import { ThemeContext } from "lib/hooks";
import Link from "next/link";
import { ThemedIcon } from "../components/themed-icon";
import { Image } from "components";

/**
 * @param {{ title: any; }} props
 */
const Header = (props) => {
    const { theme } = useContext(ThemeContext);
    const { title } = props;
    return (
        <nav>
            <a
                href="https://github.com/ItamarShDev/personal-website"
                title="Review me on GitHub"
                className="github-link"
                target="_blank"
                rel="noreferrer noopener"
            >
                <Image
                    src="icons/github.svg"
                    alt="github logo"
                    size="25px"
                    objectFit="fill"
                />
            </a>
            <Link href="/">
                <a title="Click to go home">
                    <span className="name">Itamar Sharify</span>
                    {title && (
                        <span className="divider">
                            &nbsp;&nbsp;›&nbsp;&nbsp;
                        </span>
                    )}
                    <span className="title">{title}</span>
                </a>
            </Link>
            <ThemedIcon />
            <style jsx>{`
                nav {
                    height: 6rem;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 6rem 1fr 6rem;
                    text-align: center;
                    align-items: center;
                    border-bottom: 1px solid ${theme.decorations};
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    background-color: ${theme.bg};
                    transition: all 0.2s linear;
                }
                .divider {
                    color: ${theme.header};
                }
                .name {
                    font-size: 2em;
                    font-weight: 400;
                    color: ${theme.header};
                }
                .title {
                    font-size: 1.5em;
                    font-family: cascadia;
                    color: ${theme.headerText};
                    font-style: italic;
                }
                .github-link {
                    display: flex;
                    align-items: stretch;
                    justify-content: center;
                    flex-direction: column;
                    height: 6rem;
                    width: 6rem;
                    cursor: default;
                }
            `}</style>
        </nav>
    );
};

export default Header;
