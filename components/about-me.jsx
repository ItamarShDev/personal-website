import { Avatar, SocialRefs } from "components";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";

function AboutMe(props) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about-me">
            <Avatar />
            <div className="summary">
                <h1>Itamar.</h1>
                <h2>Web Developer</h2>
                <p>
                    <i>Geek. Joker. Coder.</i>
                </p>
                <SocialRefs />
            </div>
            <style jsx>{`
                .about-me {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                a {
                    font-size: 0.7em;
                }
                a:hover,
                a:focus,
                a:active {
                    text-decoration: underline;
                }

                @media screen and (max-width: 768px) {
                    .about-me {
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                    }
                }

                h4 {
                    letter-spacing: 0.1em;
                    margin-block-end: 0;
                }
            `}</style>
        </div>
    );
}

export default AboutMe;
