import { useContext, useEffect, useState } from "react";
import { getResumeData } from "lib/resume";
import AppLayout from "layouts/app-layout";
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
        <div>
            <div className="box">
                <input id="job-filter" type="text" onChange={filterJobs} />
                <label htmlFor="job-filter">Filter by tags</label>
                {resultCount && (
                    <span className="results">{resultCount} results found</span>
                )}
            </div>
            <style jsx>
                {`
                    div {
                        top: 60px;
                        display: flex;
                        align-items: end;
                        flex-direction: column;
                    }

                    .box {
                        display: flex;
                        align-items: start;
                        flex-direction: column;
                        width: 200px;
                        height: 50px;
                        font-size: 0.8em;
                    }
                    .results {
                        color: gray;
                        font-style: italic;
                        font-size: 0.8em;
                    }

                    input {
                        background-color: transparent;
                        color: ${theme.text};
                        line-height: 3em;
                        border: none;
                        width: 150px;
                        border: none;
                        border-bottom: 1px solid ${theme.decorations};
                        transition: all 0.4s linear;
                    }

                    input + label {
                        position: absolute;
                        line-height: 3em;
                        pointer-events: none;
                        transition: all 0.4s linear;
                    }
                    input:focus {
                        outline: none;
                        width: 100%;
                        transition: all 0.4s linear;
                    }
                    input:focus + label {
                        line-height: 0em;
                        font-size: 0.6em;
                        transition: all 0.4s linear;
                    }
                `}
            </style>
        </div>
    );
}
export default function Resume({ resumeData }) {
    const { theme } = useContext(ThemeContext);
    const [opened, setOpened] = useState(0);
    const [jobs, setJobs] = useState([]);

    return (
        <AppLayout title="Itamar Sharify's CV" favicon="/cv.ico">
            <FilterJobs jobs={resumeData.jobs} updateJobs={setJobs} />
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
                    grid-gap: 1.5em;
                    line-height: 1.5em;
                    -webkit-transition: all 0.4s ease;
                    transition: all 0.4s ease;
                    position: relative;
                    padding-left: 2em;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .timeline::before {
                    content: "";
                    width: 0.3em;
                    height: 100%;
                    background: ${theme.subText};
                    position: absolute;
                    top: 0;
                    left: 0.5em;
                    border-radius: 40px 40px;
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
