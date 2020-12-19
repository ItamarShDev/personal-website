import React from "react";
import NextImage from "next/image";

export default function Image({
    src,
    alt,
    title = null,
    className = "",
    size = "100%",
    circle = false,
    objectFit = "contain",
}) {
    return (
        <div className={className} title={title}>
            <NextImage
                layout="fill"
                key={src}
                src={`/${src}`}
                alt={alt}
                objectFit={objectFit}
                objectPosition="50% 50%"
            />

            <style jsx>{`
                div {
                    position: relative;
                    overflow: hidden;
                    height: ${size};
                    border-radius: ${circle ? "50%" : 0};
                    text-align: center;
                    line-height: ${size};
                }
            `}</style>
        </div>
    );
}
