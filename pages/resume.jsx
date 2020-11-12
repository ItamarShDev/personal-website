import { useContext, useState } from "react";
import { getResumeData } from "lib/resume";
import AppLayout from "layouts/app-layout";
import { Job } from "components";
import { ThemeContext } from "lib/hooks";

export default function Resume({ resumeData }) {
    const { theme } = useContext(ThemeContext);
    const [opened, setOpened] = useState(0);
    const jobs = resumeData.jobs
        .slice(0)
        .reverse()
        .map((job, index) => (
            <Job
                key={index}
                job={job}
                index={index}
                opened={opened}
                setOpened={setOpened}
            />
        ));
    return (
        <AppLayout title="Itamar Sharify's CV" favicon="/cv.ico">
            <div className="timeline">{jobs}</div>
            <style jsx>{`
                .timeline {
                    display: grid;
                    grid-gap: 1.5em;
                    line-height: 1.5em;
                    -webkit-transition: all 0.4s ease;
                    transition: all 0.4s ease;
                    position: relative;
                    counter-reset: section;
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
