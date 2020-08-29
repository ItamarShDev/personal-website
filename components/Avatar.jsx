export default function Avatar(props) {
  return (
    <div className="row">
      <div className="avatar">
        <img
          src="images/me.jpg"
          alt="profile picture"
          title="Me, preparing for my wedding"
        />
      </div>
      <style jsx>{`
        .row {
          display: flex;
          justify-content: center;
        }
        .avatar {
          border-radius: 50%;
          height: 60vw;
          width: 60vw;
          max-width: 400px;
          max-height: 400px;
          overflow: hidden;
        }
        img {
          height: auto;
          width: 150%;
          transform: translateX(-20%);
        }
      `}</style>
    </div>
  );
}
