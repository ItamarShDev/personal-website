import { useContext, useEffect, useState } from "react";
import { getAttributesData, getResumeData } from "lib/resume";
import { Job } from "components";
import { ThemeContext } from "lib/hooks";

export function FilterJobs({ jobs, updateJobs }) {
    const { theme } = useContext(ThemeContext);
    const [resultCount, setResultCount] = useState(null);
    useEffect(() => {
        const _jobs = jobs.slice(0).reverse();
        updateJobs(_jobs);
    }, [jobs]);

    const filterJobs = (e) => {
        const text = e.target.value.toLowerCase();
        const _jobs = jobs
            .slice(0)
            .reverse()
            .filter((item) => {
                const r = item.tags.some((tag) =>
                    tag.toLowerCase().includes(text)
                );
                return r;
            });
        if (text) {
            setResultCount(_jobs.length);
        } else {
            setResultCount(null);
        }
        updateJobs(_jobs);
    };
    return (
        <div className="container">
            <label>
                Filter by tags
                <input
                    className="job-filter"
                    type="text"
                    onChange={filterJobs}
                />
            </label>
            <span className="results">
                {resultCount > 0 && `${resultCount} results found`}
            </span>
            <style jsx>
                {`
                    label {
                        color: ${theme.text};
                        font-size: 1rem;
                        padding-inline-start: 5px;
                    }
                    input.job-filter {
                        width: 100%;
                        background-color: transparent;
                        color: ${theme.text};
                        line-height: 4rem;
                        padding: 0 1rem;
                        font-size: 1.5rem;
                        display: flex;
                        align-items: start;
                        flex-direction: column;
                        background-color: ${theme.hoverDecorations};
                        opacity: 0.5;
                        border-radius: 1.5rem;
                        margin: 1rem 0;
                    }
                    input.job-filter:focus,
                    input.job-filter:hover {
                        opacity: 1;
                    }
                    .results {
                        color: gray;
                        font-style: italic;
                        font-size: 1rem;
                        height: 1rem;
                        display: inline-block;
                        padding-inline-start: 5px;
                    }
                    input,
                    input:focus {
                        outline: none;
                        border: none;
                    }
                `}
            </style>
        </div>
    );
}
export default function Resume({ resumeData, attributesData }) {
    const { theme } = useContext(ThemeContext);
    const [opened, setOpened] = useState(0);
    const [jobs, setJobs] = useState([]);

    return (
        <>
            <div className="row">
                <FilterJobs jobs={resumeData.jobs} updateJobs={setJobs} />
            </div>
            <div className="timeline">
                {jobs.map((job, index) => (
                    <Job
                        key={index}
                        job={job}
                        index={index}
                        opened={opened}
                        setOpened={setOpened}
                    />
                ))}
            </div>
            <style jsx>{`
                .timeline {
                    display: grid;
                    grid-gap: 1.5rem;
                    line-height: 1.5rem;
                    -webkit-transition: all 0.4s ease;
                    transition: all 0.4s ease;
                    position: relative;
                    padding-left: 2rem;
                    max-width: 80rem;
                    margin: 0 auto;
                }
                .timeline::before {
                    content: "";
                    width: 0.3rem;
                    height: 100%;
                    background: ${theme.subText};
                    position: absolute;
                    top: 0;
                    left: 0.5rem;
                    border-radius: 4rem 4rem;
                }
                .row {
                    padding: 1rem 0;
                    max-width: 80rem;
                    margin: 0 auto;
                }
            `}</style>
        </>
    );
}

export async function getStaticProps({ params }) {
    const resumeData = await getResumeData();
    const attributesData = await getAttributesData();
    return {
        props: {
            resumeData,
            attributesData,
            headerTitle: "Resume",
            title: "CV",
        },
    };
}
