import { useContext } from "react";
import { ThemeContext } from "@lib/hooks";

export default function Job({ job, opened, setOpened, index }) {
  const { theme } = useContext(ThemeContext);
  const tags = job.tags.join(", ");
  const isOpac = typeof opened === "number" && opened !== index;
  const isOpened = opened === index;
  return (
    <li className={isOpac ? "opac" : ""}>
      <div className="row">
        <div className="duration">
          <div className="from">{job.duration.from}</div>
          <div className="to">{job.duration.to}</div>
        </div>
        <div
          className={`box`}
          onClick={() => (isOpened ? setOpened(null) : setOpened(index))}
        >
          <div className="logo">
            <img className="image" src={job.company.logo} alt="" />
          </div>
          <div className="job">
            <h3 className="title">{job.title}</h3>
            <span className="company">
              <a href={job.company.website} target="_blank">
                {job.company.name}
              </a>
            </span>
          </div>
          <div className="summary">
            <p>
              {job.description.split("\n").map((text, idx) => (
                <span key={idx}>{text}</span>
              ))}
            </p>
          </div>
          <div className={`extra ${isOpened ? "" : "hidden"}`}>
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
        li {
          filter: none;
          opacity: 1;
          transition: opacity 0.2s linear;
        }
        li.opac {
          opacity: 0.5;
          filter: grayscale(100%) blur(1px);
        }
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
        .company a {
          color: grey;
        }
        .company a:hover {
          color: ${theme.decorations};
          text-decoration: underline double;
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
        .extra.hidden {
          flex: 0;
        }

        .extra {
          flex: 1;
          display: flex;
          height: auto;
          overflow: hidden;
          transition: flex 0.5s ease;
          font-size: 0.7rem;
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

        /* li:hover {
          transition: transform 0.2s ease-out;
          transform: scale(1.1) translateX(0.1rem);
        }

        li:hover .duration {
          font-size: 1rem;
          margin-right: 10px;
        }

        li:hover .duration .from {
          transform: translateX(-130%);
        } */
      `}</style>
    </li>
  );
}
