import { useState } from "react";
import { getResumeData } from "../lib/resume";
import AppLayout from "../layouts/app-layout";
export const Job = ({ job, hovered, onHover, index }) => {
  const tags = job.tags.join(", ");
  const isOpac = typeof hovered === "number" && hovered !== index;
  return (
    <li>
      <div className="row">
        <div className="duration">
          <div className="from">{job.duration.from}</div>
          <div className="to">{job.duration.to}</div>
        </div>
        <div
          className={`box ${isOpac ? "opac" : ""}`}
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
          <div className="summary">
            <p>
              {job.description.split("\n").map((text, idx) => (
                <span key={idx}>{text}</span>
              ))}
            </p>
          </div>
          <div className="extra">
            <p>
              {job.elaborated_desctiption.split("\n").map((text, idx) => (
                <span key={idx}>{text}</span>
              ))}
            </p>
          </div>
          <p className="tags">{tags}</p>
        </div>
      </div>
      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 10px;
          margin-left: 50px;
          padding: 5px;
          position: relative;
          max-width: 500px;
          border-bottom: 0.02rem #808080 dotted;
          filter: none;
        }

        .box.opac {
          opacity: 0.5;
          transition: opacity 0.2s linear;
          filter: grayscale(100%) blur(1px);
        }

        .job {
          display: flex;
          flex-direction: column;
        }
        .title {
          font-size: 1.2rem;
          margin-block-end: 0.2rem;
        }
        .company {
          display: flex;
          font-size: 0.9rem;
          font-style: italic;
          align-items: center;
          color: grey;
        }
        .company:before {
          content: "@";
          font-style: italic;
          opacity: 0.5;
          font-size: 0.5rem;
          margin: 0 5px;
        }
        .logo {
          position: absolute;
          height: 1.2rem;
          width: 100px;
          display: flex;
          align-items: center;
          top: 20px;
          right: -10px;
          transform: rotate(30deg);
        }

        .logo .image {
          position: relative;
          height: inherit;
          width: auto;
          margin: 0 auto;
        }
        .summary {
          font-size: 1rem;
          break-after: always;
          white-space: wrap;
        }
        .extra {
          height: 0;
          overflow: hidden;
          font-size: 0.7rem;
          font-style: normal;
        }

        .box:hover .extra {
          height: auto;
          transition: height 0.2s ease;
          transition: font-style 5s linear;
          font-style: italic;
        }

        .tags {
          font-size: 0.7rem;
          color: grey;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        li {
          transform: translateX(-1.85rem);
        }
        @media (min-width: 720px) {
          .duration .from {
            transform: translateX(-100%);
          }
          .duration .to {
            transform: translateY(-100%);
          }
        }
        .duration {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          height: inherit;
          width: 50px;
          font-size: 0.7rem;
        }

        li:hover {
          transition: transform 0.2s ease-out;
          transform: scale(1.1) translateX(0.1rem);
        }

        li:hover .duration {
          font-size: 1rem;
          margin-right: 10px;
        }

        li:hover .duration .from {
          transform: translateX(-130%);
        }
      `}</style>
    </li>
  );
};

export default function Resume({ resumeData }) {
  const [hovered, setHovered] = useState(null);
  const jobs = resumeData.jobs
    .slice(0)
    .reverse()
    .map((job, index) => (
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
      <ul className="timeline" onMouseLeave={() => setHovered(null)}>
        {jobs}
      </ul>
      <style jsx>{`
        ul.timeline {
          border-left: 2px dotted;
        }
      `}</style>
    </AppLayout>
  );
}

export async function getStaticProps({ params }) {
  const resumeData = await getResumeData();
  return {
    props: {
      resumeData,
      headerTitle: "Resume",
    },
  };
}
