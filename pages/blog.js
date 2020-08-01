import { getSortedPostsData } from "../lib/posts";
import AppLayout from "../layouts/app-layout";
import Card from "@components/card";

export async function getServerSideProps() {
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
      route={`posts/${post.id.replace(/\.mdx/, "")}`}
      title={post.title}
      subTitle={post.summary}
    />
  );
}

export default function Blogs({ allPostsData }) {
  return (
    <AppLayout title="Blog - Itamar Sharify">
      {allPostsData.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </AppLayout>
  );
}
