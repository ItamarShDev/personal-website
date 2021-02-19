import { getAllPostIds, getPostData } from "lib/posts";
import renderMarkdown from "lib/render-markdown";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";

const EmailMeFooter = ({ theme, blog }) => {
    const emailTitle = `Re: ${encodeURI(blog.title)}`;
    const mainTo = `"mailto:itamarsharifytech@gmail.com?subject=${emailTitle}`;
    return (
        <address className="mail-me">
            <p>
                Having thoughts? email me
                <a href={mainTo}> here</a>
            </p>
            <style jsx>{`
                .mail-me {
                    font-size: 1.5rem;
                    font-style: italic;
                    border-top: 1px dotted ${theme.text};
                }
            `}</style>
        </address>
    );
};

export default function Blog({ data, html }) {
    if (!data) return null;
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <h1 className="post-title">{data.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: html }} />
            <EmailMeFooter blog={data} theme={theme} />
            <style jsx global>{`
                h1.post-title {
                    padding-bottom: 2rem;
                    color: ${theme.header};
                    font-weight: 400;
                }

                h1 a,
                h2 a,
                h3 a {
                    color: ${theme.text};
                    font-weight: 400;
                }
                article {
                    font-weight: 300;
                    font-size: 1.8rem;
                    line-height: 3rem;
                    letter-spacing: 0.5px;
                    color: ${theme.paragraph};
                    font-family: "Roboto", sans-serif;
                }

                article > pre {
                    max-height: 60rem;
                    padding: 1rem;
                    overflow-y: auto;
                    overflow-x: auto;
                    border-left: 3px ${theme.decorations} solid;
                    font-family: "Fira Code", monospace;
                }
                article blockquote:before {
                    content: "„";
                    position: absolute;
                    font-size: 10rem;
                    left: 0;
                    top: 0;
                    color: grey;
                }
                article blockquote {
                    position: relative;
                    font-family: "Helvetica", serif;
                    padding: 1rem 1rem 1rem 5rem;
                    margin: 0;
                    font-style: italic;
                    font-size: 1.5rem;
                    font-weight: 100;
                }
                blockquote p {
                    margin: 0;
                }
                article ul {
                    list-style-type: square;
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
            isCentered: true,
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
