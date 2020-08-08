import { getAllPostIds, getPostData } from "@lib/posts";
import AppLayout from "@layouts/app-layout";
import renderMarkdown from "@lib/render-markdown";
import { useContext } from "react";
import { ThemeContext } from "@hooks";
export default function Blog({ data, html }) {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <AppLayout title={data.title} favicon="/cv.ico">
      <h1>{data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx global>{`
        @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css);
        article pre {
          font-family: "hasklig", "fira";
          line-height: 1.5em;
          padding: 0.75rem;
          border-left: 1px ${theme.decorations} solid;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </AppLayout>
  );
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const { data, content } = getPostData(params.slug);
  return {
    props: {
      data,
      html: renderMarkdown(content),
    },
  };
}
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
