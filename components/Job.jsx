import { useContext } from "react";
import { ThemeContext } from "@lib/hooks";

export default function Job({ job, opened, setOpened, index }) {
  const { theme } = useContext(ThemeContext);
  const tags = job.tags.join(", ");
  return (
    <li>
      <div className="row">
        <div className="duration">
          {job.duration.from} - {job.duration.to}
        </div>
        <div className="box">
          <div className="job">
            <h3 className="title">{job.title}</h3>
            <span className="company">
              <a
                href={job.company.website}
                target="_blank"
                rel="noreferrer noopener"
              >
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
        .row {
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 600px) {
          .row {
            flex-direction: column;
          }
        }
        .box {
          display: flex;
          flex-direction: column;
          margin: 10px;
          padding: 5px;
          max-width: 700px;
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

        .extra {
          font-size: 0.7rem;
          font-style: italic;
        }

        .tags {
          font-size: 0.7rem;
          color: grey;
        }

        .duration {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          height: inherit;
          font-size: 0.7rem;
        }
      `}</style>
    </li>
  );
}
