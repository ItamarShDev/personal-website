import { getAllPostIds, getPostData } from "lib/posts";
import renderMarkdown from "lib/render-markdown";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";

export default function Blog({ data, html }) {
    if (!data) return null;
    const { theme, isDark } = useContext(ThemeContext);
    const codeBg = isDark ? "rgba(0, 0, 0, 0.5)" : theme.header;
    return (
        <>
            <h1 className="post-title">{data.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: html }} />
            <style jsx global>{`
                @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css);

                h1.post-title {
                    font-weight: 500;
                    padding-bottom: 2rem;
                    color: ${theme.header};
                }

                h2,
                h3,
                h4 {
                    font-weight: 400;
                    font-style: italic;
                }
                h1 a,
                h2 a,
                h3 a {
                    color: ${theme.text};
                }

                article {
                    font-size: 1.8rem;
                    line-height: 2.5rem;
                    font-weight: 400;
                }

                article pre {
                    font-size: 0.9em;
                    max-height: 400px;
                    padding: 1rem;
                    line-height: 2rem;
                    overflow-y: auto;
                    overflow-x: auto;
                    color: white;
                    border-left: 1px ${theme.decorations} solid;
                    background-color: ${codeBg};
                }
                article pre code {
                    font-family: "fira";
                }
                article blockquote {
                    font-family: "Helvetica Neue", "Helvetica", Arial, sans;
                    padding: 0.5rem 0.6rem;
                    border-left: 1px ${theme.decorations} dotted;
                    margin: 1.5rem 0 0 0;
                    font-size: 1.3rem;
                    font-style: italic;
                }
                blockquote p {
                    margin: 0;
                }
                article ul {
                    font-family: Georgia, serif;
                    list-style-type: square;
                    font-style: italic;
                    line-height: 1.5rem;
                }
                ul li {
                    margin: 0.8rem auto;
                }
                @media (max-width: 640px) {
                    article pre {
                        font-size: 1rem;
                        line-height: 2rem;
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </>
    );
}

export async function getStaticProps({ params }) {
    const { data, content } = getPostData(params.slug);
    return {
        props: {
            data,
            title: "Blog",
            html: renderMarkdown(content),
            headerTitle: "Blog",
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
