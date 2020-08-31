import React from "react";
import { centered, grid } from "theme/theme";

function SocialRefs({ withTitle }) {
  const { className: centerClass, styles: centerStyle } = centered(true);
  const { className: gridClass, styles: gridStyle } = grid(2, 1, 20);

  return (
    <div className={centerClass}>
      {withTitle && <h5>Feel free to contact me here:</h5>}
      <div className={gridClass}>
        <a
          className="item twitter"
          href="https://twitter.com/ISharify"
          target="_blank"
          rel="noreferrer noopener"
        ></a>
        <a
          className="item github"
          href="https://www.github.com/ItamarShDev"
          target="_blank"
          rel="noreferrer noopener"
        ></a>
        {gridStyle}
        <style jsx>{`
          .github {
            background-image: url(/icons/github.svg);
          }
          .twitter {
            background-image: url(/icons/twitter.svg);
          }
          .item {
            background-size: 60px;
            height: 60px;
            width: 60px;
          }
        `}</style>
      </div>
      {centerStyle}
    </div>
  );
}

export default SocialRefs;
