import Link from "next/link";
import AppLayout from "../layouts/app-layout";
import { Card, Grid } from "../theme/theme";

export default function Home() {
   return (
      <AppLayout title="Itamar Sharify">
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
            <Link href="blog">
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
         <style jsx>{Card}</style>
         <style jsx>{Grid}</style>
      </AppLayout>
   );
}
