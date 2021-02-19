import { getSortedPostsData } from "../lib/posts";
import { Card } from "components";

export function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
            headerTitle: "Blog",
            title: "Blog",
            isCentered: true,
        },
    };
}

function Blog({ post }) {
    return (
        <Card
            key={post.id}
            routeRef="blog/[slug]"
            route={`blog/${post.slug}`}
            title={post.title}
            subTitle={post.summary}
        />
    );
}

export default function Blogs({ allPostsData }) {
    return (
        <div>
            {allPostsData.map((post) => (
                <Blog key={post.slug} post={post} />
            ))}
        </div>
    );
}
