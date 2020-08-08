import { getSortedPostsData } from "../lib/posts";
import AppLayout from "../layouts/app-layout";
import Card from "@components/card";

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      headerTitle: "Blog",
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
    <AppLayout title="Blog - Itamar Sharify">
      {allPostsData.map((post) => (
        <Blog key={post.slug} post={post} />
      ))}
    </AppLayout>
  );
}
