import css from "styled-jsx/css";
const TimelineSliderStyle = css`
  .timeline {
    display: flex;
  }
  input[type="range"][orient="vertical"] {
    transform: rotate(180deg);
    writing-mode: bt-lr;
    -webkit-appearance: slider-vertical;
    padding: 0 5px;
  }
`;

export default function TimelineSlider({ jobs, opened, onChange, children }) {
  const steps = jobs.length - 1;
  return (
    <div className="timeline">
      <input
        orient="vertical"
        type="range"
        list="years"
        min={0}
        max={steps}
        value={opened}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <datalist id="years">
        {jobs.map((job, idx) => (
          <option value={idx} label={job.from}>
            {job.from}
          </option>
        ))}
      </datalist>

      {children}
      <style jsx>{TimelineSliderStyle}</style>
    </div>
  );
}
