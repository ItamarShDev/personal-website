import { useState } from "react";
import { getResumeData } from "@lib/resume";
import AppLayout from "@layouts/app-layout";
import { Job, TimelineSlider } from "@components";

export default function Resume({ resumeData }) {
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
      <TimelineSlider
        jobs={jobs}
        opened={opened}
        onChange={(selected) => setOpened(selected)}
      >
        <ul className="timeline">{jobs}</ul>
      </TimelineSlider>
      {/* <ul className="timeline">{jobs}</ul> */}
      <style jsx>{`
        ul.timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
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
