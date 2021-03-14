import { Card } from "components";

function Links(props) {
    return (
        <>
            <Card route="/resume" title="Resume" subTitle="Resume Timeline" />
            <Card route="/blog" title="Blog" subTitle="My Development Journy" />
        </>
    );
}

export default Links;
