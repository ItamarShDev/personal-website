import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import AppLayout from "../../layouts/app-layout";
import { Blog as BlogStyle } from "../../theme/theme";
export default function Blog({ postData }) {
   return (
      <AppLayout title={postData.title} favicon="/cv.ico">
         <main>{postData.summary}</main>
         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
         <style jsx>{BlogStyle}</style>
      </AppLayout>
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
