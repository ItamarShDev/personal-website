import Head from "next/head";
export const Job = ({ job }) => (
   <a className="card">
      <h3 className="title">{post.title}</h3>
      <p className="summary">{post.summary}</p>
   </a>
);

export default function Resume(props) {
   return (
      <div className="container">
         <Head>
            <title>Itamar Sharify's CV</title>
            <link rel="icon" href="/cv.ico" />
         </Head>
         <main>Here is my resume</main>
      </div>
   );
}
