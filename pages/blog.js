import { getSortedPostsData } from "../lib/posts";
import AppLayout from "../layouts/app-layout";
import Link from "next/link";

export async function getServerSideProps() {
   const allPostsData = getSortedPostsData();
   return {
      props: {
         allPostsData,
      },
   };
}

function Blog({ post }) {
   return (
      <Link key={post.id} href={`posts/${post.id.replace(/\.mdx/, "")}`}>
         <div className="card">
            <h3 className="title">{post.title}</h3>
            <p className="summary">{post.summary}</p>
         </div>
      </Link>
   );
}

export default function Blogs({ allPostsData }) {
   return (
      <AppLayout title="Blog - Itamar Sharify">
         <div className="grid">
            {allPostsData.map((post) => (
               <Blog post={post} />
            ))}
         </div>
      </AppLayout>
   );
}
