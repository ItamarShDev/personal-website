import Head from "next/head";
import Link from "next/link";
import styles, { footer } from "../theme/theme";

export default function Home() {
   return (
      <div className="container">
         <Head>
            <title>Itamar Sharify</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>Itamar Sharify's website</header>
         <main>
            <div className="grid">
               <Link href="resume">
                  <a className="card">
                     <h3>Resume &rarr;</h3>
                     <p>Resume Timeline</p>
                  </a>
               </Link>
               <Link href="uses">
                  <a className="card">
                     <h3>Uses &rarr;</h3>
                     <p>Favorite stack</p>
                  </a>
               </Link>
               <Link href="blogs">
                  <a className="card">
                     <h3>Blog &rarr;</h3>
                     <p>My JS journy</p>
                  </a>
               </Link>
               <Link href="personal">
                  <a className="card">
                     <h3>Let's get personal &rarr;</h3>
                     <p>Learn about me</p>
                  </a>
               </Link>
            </div>
         </main>

         <footer>
            <a href="https://www.github.com/ItamarShDev" target="_blank">
               <img
                  className="twitter"
                  src="icons/twitter.svg"
                  alt="Twitter logo"
               />
               Twitter
            </a>
            <a href="https://twitter.com/ISharify" target="_blank">
               <img src="icons/github.svg" alt="github logo" />
               Github
            </a>
            <a href="https://medium.com/@itamarsharify" target="_blank">
               <img
                  className="medium"
                  src="icons/medium.svg"
                  alt="Medium logo"
               />
               Medium
            </a>
         </footer>
         <style jsx>{styles}</style>
         <style jsx>{footer}</style>
         <style jsx>{Link}</style>

         <style jsx global>{`
            html,
            body {
               padding: 0;
               margin: 0;
               font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, sans-serif;
            }

            * {
               box-sizing: border-box;
            }
         `}</style>
      </div>
   );
}
