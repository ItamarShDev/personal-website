import { Links, LanguagesList, Stats, Avatar, AboutMe } from "components";
import FloatingButton from "components/floating-button";

export default function Home() {
    return (
        <article>
            <section className="image">
                <Avatar />
            </section>
            <section className="about-me">
                <AboutMe />
            </section>
            <section className="stats">
                <Stats />
            </section>
            <section className="links">
                <Links />
            </section>
            <footer>
                <FloatingButton />
            </footer>
            <style jsx>{`
                article {
                    height: 100%;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr 8.5rem;
                    grid-template-columns: 2fr 3fr;
                    grid-template-areas: "image about-me" "image links" "image stats" "footer footer";
                }
                section {
                    padding: 2rem 0;
                }
                .image {
                    grid-area: image;
                    display: block;
                    height: inherit;
                }
                .about-me {
                    grid-area: about-me;
                    display: block;
                }
                .links {
                    grid-area: links;
                }

                .stats {
                    grid-area: stats;
                }
                footer {
                    grid-area: footer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                @media only screen and (max-width: 968px) {
                    article {
                        grid-template-areas: "image about-me" "links links" "stats stats" "footer footer";
                    }
                }
            `}</style>
        </article>
    );
}
export async function getStaticProps({ params }) {
    return {
        props: {
            isCentered: false,
        },
    };
}
