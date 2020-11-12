import { useContext } from "react";
import { ThemeContext } from "lib/hooks";

export default function Job({ job }) {
    const { theme } = useContext(ThemeContext);
    const tags = job.tags.join(", ");
    return (
        <dl>
            <dt>
                {job.duration.from} - {job.duration.to}
            </dt>
            <dd className="box">
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
                        {job.elaborated_desctiption
                            .split("\n")
                            .map((text, idx) => (
                                <span key={idx}>{text}</span>
                            ))}
                    </p>
                </div>
                <p className="tags">{tags}</p>
            </dd>
            <style jsx>{`
                dl {
                    position: relative;
                }
                dl::before {
                    content: "";
                    position: absolute;
                    left: -2.05em;
                    width: 1em;
                    height: 1em;
                    display: flex;
                    color: #ffffff;
                    background-color: ${theme.decorations};
                    border: 0.2em solid white;
                    border-radius: 50%;
                }

                dt {
                    font-size: 1em;
                    padding: 0.5em;
                    transform: translateY(-0.5em);
                }

                dd {
                    background-color: ${theme.hoverDecorations};
                    border-radius: 1em;
                    padding: 0 1em;
                    margin-left: 0.5em;
                    display: flex;
                    flex-direction: column;
                }

                .title {
                    font-size: 1.2em;
                    margin-block-end: 0.2em;
                }
                .company {
                    display: flex;
                    font-size: 0.9em;
                    font-style: italic;
                    align-items: center;
                    color: ${theme.subText};
                }
                .company a {
                    color: ${theme.subText};
                }
                @media (hover: hover) {
                    .company a:hover {
                        color: ${theme.decorations};
                        text-decoration: underline double;
                    }
                }
                .company:before {
                    content: "@";
                    font-style: italic;
                    opacity: 0.5;
                    font-size: 0.5em;
                    margin: 0 5px;
                }
                .logo {
                    position: absolute;
                    height: 1.2em;
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
                    font-size: 1em;
                    break-after: always;
                    white-space: wrap;
                }

                .extra {
                    font-size: 0.7em;
                    font-style: italic;
                }

                .tags {
                    font-size: 0.7em;
                    color: ${theme.subText};
                }
            `}</style>
        </dl>
    );
}
