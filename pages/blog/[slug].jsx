import { getAllPostIds, getPostData } from "@lib/posts";
import AppLayout from "@layouts/app-layout";
import renderMarkdown from "@lib/render-markdown";
import { ThemeContext } from "@hooks";
import { useContext } from "react";

export default function Blog({ data, html }) {
  if (!data) return null;
  const { theme, isDark } = useContext(ThemeContext);
  return (
    <AppLayout title={data.title} favicon="/cv.ico">
      <h1>{data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx global>{`
        @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css);
        *::selection {
          background-color: ${theme.hoverDecorations};
          color: ${theme.header};
        }
        h1 {
          text-decoration: underline double;
          margin-bottom: 30px;
          font-family: "hasklig";
        }
        h2 {
          font-family: "hasklig";
        }
        h1 a,
        h2 a {
          color: ${theme.header};
        }
        a {
        }
        article {
          line-height: 2em;
          font-family: Arial, Helvetica, sans-serif;
        }
        article pre {
          font-family: "fira", "hasklig";
          line-height: 1.5em;
          padding: 0.75em;
          border-left: 1px ${theme.decorations} solid;
          background-color: ${isDark ? "rgba(0, 0, 0, 0.5)" : theme.header};
          overflow-x: auto;
          max-height: 400px;
          overflow-y: auto;
        }
        article blockquote {
          font-family: Georgia, serif;
          padding: 5px 0.4em;
          border-left: 1px ${theme.decorations} dotted;
          margin: 1rem 0 0 0;
          font-size: 0.9em;
          font-style: italic;
        }
        blockquote p {
          margin: 0;
        }
        article ul {
          font-family: Georgia, serif;
          list-style-type: square;
          font-style: italic;
          line-height: 1.2em;
        }
        ul li {
          margin: 0.4rem auto;
        }
        @media (max-width: 640px) {
          article pre {
            font-size: 0.8em;
            line-height: 1rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </AppLayout>
  );
}

export async function getStaticProps({ params }) {
  const { data, content } = getPostData(params.slug);
  return {
    props: {
      data,
      html: renderMarkdown(content),
      headerTitle: "Blog",
      isContent: true,
    },
  };
}
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}
