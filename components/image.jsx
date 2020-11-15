import React, { useEffect, useState } from "react";
import NextImage from "next/image";

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
    return (
        <div className={className} title={title}>
            <div className="img full">
                <NextImage layout="fill" src={`/${src}`} alt={alt} />
            </div>

            <style jsx>{`
                div {
                    position: relative;
                    overflow: hidden;
                    width: ${size};
                    height: ${size};
                    border-radius: ${circle ? "50%" : 0};
                    text-align: center;
                    line-height: ${size};
                }

                .img {
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
