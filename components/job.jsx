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
                        {job.elaborated_description
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
                    left: -2.25rem;
                    width: 1.5rem;
                    height: 1.5rem;
                    display: flex;
                    color: #ffffff;
                    background-color: ${theme.decorations};
                    border: 0.2rem solid white;
                    border-radius: 50%;
                }

                dt {
                    font-size: 1.5rem;
                    padding: 1rem;
                    transform: translateY(-0.75rem);
                }

                dd {
                    background-color: ${theme.hoverDecorations};
                    border-radius: 1em;
                    padding: 1.5em;
                    margin-left: 0.5em;
                    display: flex;
                    flex-direction: column;
                }

                .title {
                    font-size: 1.7rem;
                    margin-block-end: 0.5rem;
                }
                .company {
                    display: flex;
                    font-size: 1.2rem;
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
                    font-size: 1rem;
                    margin: 0 0.5rem;
                }
                .logo {
                    position: absolute;
                    height: 1.5rem;
                    width: 10rem;
                    display: flex;
                    align-items: center;
                    top: 3rem;
                    right: -1rem;
                    transform: rotate(30deg);
                }

                .logo .image {
                    position: relative;
                    height: inherit;
                    width: auto;
                    margin: 0 auto;
                }
                .summary {
                    font-size: 1.5rem;
                    break-after: always;
                    white-space: wrap;
                }

                .extra {
                    font-size: 1.1rem;
                    font-style: italic;
                }

                .tags {
                    font-size: 1rem;
                    color: ${theme.subText};
                }
            `}</style>
        </dl>
    );
}
