import Avatar from "@components/Avatar";

function AboutMe(props) {
  return (
    <div className="about-me">
      <Avatar />
      <div className="summary">
        <h4>Full Stack Web Developer</h4>
        <i>
          <a
            href="https://maps.google.com/?q=Jerusalem"
            target="_blank"
            rel="noreferrer noopener"
          >
            Jerusalem, Israel
          </a>
        </i>
        <p>
          <i>Geek. Joker. Coder.</i>
        </p>
      </div>
      <style jsx>{`
        .about-me {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }

        @media screen and (max-width: 768px) {
          .about-me {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }

        h4 {
          letter-spacing: 0.1em;
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
}

export default AboutMe;
