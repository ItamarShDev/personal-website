import { Links, LanguagesList } from "components";
import Personal from "layouts/personal";
import FloatingButton from "components/floating-button";

export default function Home() {
    return (
        <article>
            <section>
                <Personal />
            </section>
            <aside>
                <Links />
            </aside>
            <footer>
                <LanguagesList />
                <FloatingButton />
            </footer>
            <style jsx>{`
                article {
                    display: grid;
                    grid-template-areas: "about links" "footer footer";
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
