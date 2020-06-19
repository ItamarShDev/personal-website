import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

export async function getServerSideProps() {
   const allPostsData = getSortedPostsData();
   return {
      props: {
         allPostsData,
      },
   };
}
export default function Blogs({ allPostsData }) {
   return (
      <div className="container">
         <Head>Blog posts</Head>
         <main>
            {allPostsData.map((post) => (
               <div className="container" key={post.id}>
                  <div>
                     <a href={`posts/${post.id.replace(/\.mdx/, "")}`}>
                        {post.title}
                     </a>
                  </div>
                  <div>{post.summary}</div>
               </div>
            ))}
         </main>
      </div>
   );
}
