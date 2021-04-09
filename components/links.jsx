import { LinkCard } from "components";

function Links(props) {
    return (
        <div>
            <LinkCard
                route="/resume"
                title="Resume"
                subTitle="Resume Timeline"
            />
            <LinkCard
                route="/blog"
                title="Blog"
                subTitle="My Development Journy"
            />
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                }
            `}</style>
        </div>
    );
}

export default Links;
