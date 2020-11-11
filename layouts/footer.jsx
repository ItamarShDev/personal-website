import { useContext } from "react";
import { ThemeContext } from "lib/hooks";
import Image from "components/image";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer>
            <a
                href="https://twitter.com/ISharify"
                target="_blank"
                rel="noreferrer noopener"
                className="twitter"
            >
                <div>
                    <Image
                        src="icons/twitter.svg"
                        alt="Twitter logo"
                        type="svg"
                        center
                    />
                </div>
                Twitter
            </a>
            <a
                href="https://www.github.com/ItamarShDev"
                target="_blank"
                rel="noreferrer noopener"
            >
                <div>
                    <Image
                        type="svg"
                        src="icons/github.svg"
                        alt="github logo"
                        center
                    />
                </div>
                Github
            </a>
            <a
                href="https://medium.com/@itamarsharify"
                target="_blank"
                className="medium"
                rel="noreferrer noopener"
            >
                <div>
                    <Image
                        type="svg"
                        src="icons/medium.svg"
                        alt="Medium logo"
                        center
                    />
                </div>
                Medium
            </a>
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid ${theme.decorations};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                a {
                    display: flex;
                    margin: 5px;
                    font-size: 1em;
                    color: ${theme.text};
                    justify-content: center;
                    align-items: center;
                    filter: grayscale(100%) opacity(0.5);
                }

                @media (hover: hover) {
                    a:hover {
                        color: ${theme.decorations};
                        filter: none;
                    }
                }
                a div {
                    height: 1em;
                    width: 1em;
                    margin: auto 5px;
                }
                a div.medium {
                    height: 0.9em;
                    width: 0.9em;
                }
                a div.twitter {
                    height: 1.5em;
                    width: 1.5em;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
