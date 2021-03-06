import { getAllPostIds, getPostData } from "lib/posts";
import renderMarkdown from "lib/render-markdown";
import { ThemeContext, useTelegramComments } from "lib/hooks";
import { useContext } from "react";
import EmailMeFooter from "components/email-footer";

export default function Blog({ data, html }) {
    if (!data) return null;
    const { theme } = useContext(ThemeContext);
    useTelegramComments("blog-post");
    const emailTitle = `Re: ${encodeURI(data.title)}`;

    return (
        <div id="blog-post">
            <h1 className="post-title">{data.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: html }} />
            <EmailMeFooter
                title={emailTitle}
                text="Having thoughts? email me"
            />
            <style jsx>{`
                div {
                    max-width: 100rem;
                    margin: 0 auto;
                }
            `}</style>
            <style jsx global>{`
                h1.post-title {
                    padding-bottom: 2rem;
                    color: ${theme.headerText};
                    font-weight: 200;
                }
                p {
                    filter: brightness(150%);
                    margin: 0 0 0 0;
                }

                h1 a,
                h2 a,
                h3 a {
                    filter: brightness(225%);
                    font-weight: 300;
                    text-decoration: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;
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
                @media only screen and (max-width: 968px) {
                    article > pre {
                        width: 90vw;
                        transform: translateX(-5vw);
                    }
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
        </div>
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
