import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Blog({ postData }) {
   return (
      <div className="container">
         <Head>
            <title>{postData.title}</title>
            <link rel="icon" href="/cv.ico" />
         </Head>
         <main>{postData.summary}</main>
         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
   );
}
export async function getStaticPaths() {
   // Return a list of possible value for id
   const paths = getAllPostIds();
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   // Fetch necessary data for the blog post using params.id
   const postData = await getPostData(params.id);
   return {
      props: {
         postData,
      },
   };
}
