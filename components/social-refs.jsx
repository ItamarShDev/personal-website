import Image from "components/image";
import React from "react";
import { centered, grid } from "theme/theme";

function SocialRefs({ withTitle }) {
    const { className: centerClass, styles: centerStyle } = centered({
        isColumns: true,
    });

    const { className: gridClass, styles: gridStyle } = grid({
        rows: 1,
        cols: 2,
        gap: 20,
    });

    return (
        <div className="row">
            {withTitle && <h5>Feel free to contact me here:</h5>}
            <div className={gridClass}>
                <a
                    className="item twitter"
                    href="https://twitter.com/ISharify"
                    target="_blank"
                    rel="noreferrer noopener"
                    alt="twitter link"
                >
                    <Image
                        src="icons/twitter.svg"
                        alt="Twitter logo"
                        type="svg"
                        center
                    />
                </a>
                <a
                    className="item github"
                    href="https://www.github.com/ItamarShDev"
                    target="_blank"
                    rel="noreferrer noopener"
                    alt="github link"
                >
                    <Image
                        type="svg"
                        src="icons/github.svg"
                        alt="github logo"
                        center
                    />
                </a>
                {gridStyle}
            </div>
            <style jsx>{`
                div.row {
                    width: max-content;
                }
                .item {
                    background-size: 30px;
                    height: 30px;
                    font-size: 0;
                    width: 30px;
                }
            `}</style>
            {centerStyle}
        </div>
    );
}

export default SocialRefs;
