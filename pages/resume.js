import { useState } from "react";
import { getResumeData } from "../lib/resume";
import { JobCard } from "../theme/theme";
import AppLayout from "../layouts/app-layout";
export const Job = ({ job, hovered, onHover, index }) => {
   const tags = job.tags.join(", ");
   const isOpac = typeof hovered === "number" && hovered !== index;
   return (
      <div
         className={`card ${isOpac ? "opac" : ""}`}
         onMouseEnter={() => onHover(index)}
      >
         <div className="logo">
            <img className="image" src={job.company.logo} alt="" />
         </div>
         <div className="job">
            <h3 className="title">{job.title}</h3>
            <a href={job.company.website} target="_blank" className="company">
               <div>{job.company.name}</div>
            </a>
         </div>
         <p className="summary">
            {job.description.split("\n").map((text, idx) => (
               <div key={idx}>{text}</div>
            ))}
         </p>
         <div className="tags">{tags}</div>
         <style jsx>{JobCard}</style>
      </div>
   );
};

export default function Resume({ resumeData }) {
   const [hovered, setHovered] = useState(null);
   const jobs = resumeData.jobs.map((job, index) => (
      <Job
         key={index}
         job={job}
         index={index}
         hovered={hovered}
         onHover={(idx) => setHovered(idx)}
      />
   ));
   return (
      <AppLayout title="Itamar Sharify's CV" favicon="/cv.ico">
         <div onMouseLeave={() => setHovered(null)}>{jobs}</div>
      </AppLayout>
   );
}

export async function getStaticProps({ params }) {
   const resumeData = await getResumeData();
   return {
      props: {
         resumeData,
      },
   };
}
