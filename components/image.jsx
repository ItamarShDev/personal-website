import React, { useEffect, useState } from "react";
function useImage(source) {
    const [image, setImage] = useState({
        src: null,
        preSrc: null,
    });
    useEffect(() => {
        const img = require(`public/${source}?lqip`);
        setImage(img);
    });
    return [image.src, image.preSrc];
}

export default function Image({
    src,
    alt,
    title,
    type,
    className = "",
    size = "100%",
    center = false,
    circle = false,
    imageSize = "100%",
}) {
    const shift = center ? 50 : 0;

    if (type === "svg") {
        return (
            <div className={className}>
                <img src={src} alt={alt} title={title} />
                <style jsx>{`
                    div {
                        position: relative;
                        overflow: hidden;
                        width: ${size};
                        height: ${size};
                        border-radius: ${circle ? "50%" : 0};
                    }
                    img {
                        position: absolute;
                        width: ${imageSize};
                        top: ${shift}%;
                        left: ${shift}%;
                        transform: translate(-${shift}%, -${shift}%);
                    }
                `}</style>
            </div>
        );
    }
    const [imageSrc, imagePreSrc] = useImage(src);
    const loadingClass = imageSrc ? "" : "loading";
    return (
        <div className={`${className} ${loadingClass}`} title={title}>
            <img className="preview" src={imagePreSrc} alt={alt} />
            <img className="full" src={imageSrc} alt={alt} />

            <style jsx>{`
                div {
                    position: relative;
                    overflow: hidden;
                    width: ${size};
                    height: ${size};
                    border-radius: ${circle ? "50%" : 0};
                    filter: blur(20px);
                    -webkit-mask-image: -webkit-radial-gradient(white, black);
                }
                div:not(.loading) {
                    filter: blur(0);
                }

                img.full {
                    text-align: center;
                    line-height: ${size};
                }
                div:not(.loading) img.preview {
                    opacity: 0;
                }
                div.loading img.preview {
                    opacity: 1;
                }

                img {
                    position: absolute;
                    object-fit: contain;
                    width: ${imageSize};
                    height: ${imageSize};
                    top: ${shift}%;
                    left: ${shift}%;
                    transform: translate(-${shift}%, -${shift}%);
                }
            `}</style>
        </div>
    );
}
