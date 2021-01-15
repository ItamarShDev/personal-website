import { Card } from "components";

function Links(props) {
    return (
        <div>
            <Card route="/resume" title="Resume" subTitle="Resume Timeline" />
            <Card route="/blog" title="Blog" subTitle="My Development Journy" />
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 1em;
                }
            `}</style>
        </div>
    );
}

export default Links;
