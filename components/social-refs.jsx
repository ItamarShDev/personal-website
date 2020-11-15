import Image from "components/image";
import React from "react";
import { centered, grid } from "theme/theme";

function SocialRefs({ withTitle }) {
    const { className: gridClass, styles: gridStyle } = grid({
        rows: 1,
        cols: 3,
        gap: 20,
    });

    return (
        <div className="row">
            {withTitle && <h5>Feel free to contact me here:</h5>}
            <div className={`${gridClass} refs`}>
                <a
                    className="item twitter"
                    href="https://twitter.com/ISharify"
                    target="_blank"
                    rel="noreferrer noopener"
                    alt="twitter link"
                    title="Twitter"
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
                    title="Github"
                >
                    <Image
                        type="svg"
                        src="icons/github.svg"
                        alt="github logo"
                        center
                        imageSize="25px"
                    />
                </a>
                <a
                    href="https://medium.com/@itamarsharify"
                    target="_blank"
                    className="item medium"
                    rel="noreferrer noopener"
                    title="Medium"
                >
                    <Image
                        type="svg"
                        src="icons/medium.svg"
                        alt="Medium logo"
                        center
                        imageSize="20px"
                    />
                </a>
                {gridStyle}
            </div>
            <style jsx>{`
                .item {
                    background-size: 30px;
                    height: 30px;
                    margin: 0 5px;
                    font-size: 0;
                    width: 30px;
                }
                .refs {
                    justify-content: start;
                }
                @media screen and (max-width: 768px) {
                    .refs {
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default SocialRefs;
