import React, { useEffect, useState } from "react";
function useImage(source) {
  const [image, setImage] = useState({ src: null, preSrc: null, srcSet: null });
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
}) {
  const shift = center ? 50 : 0;

  if (type === "svg") {
    return (
      <div className={className}>
        <img src={src} alt={alt} title={title} />
        <style jsx>{`
          div {
            position: relative;
            width: ${size};
            height: ${size};
          }
          img {
            position: absolute;
            width: 100%;
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
    <div className={`${className} ${loadingClass}`}>
      <img
        className="preview"
        src={imagePreSrc}
        alt={alt}
        title={title}
        loading="lazy"
      />
      <img src={imageSrc} alt={alt} title={title} loading="lazy" />
      <style jsx>{`
        div {
          position: relative;
          width: ${size};
          height: ${size};
          transition: all 1s linear;
          filter: blur(0);
        }
        div.loading {
          filter: blur(20px);
        }
        div img.preview {
          opacity: 0;
        }
        img {
          position: absolute;
          width: 100%;
          top: ${shift}%;
          left: ${shift}%;
          transform: translate(-${shift}%, -${shift}%);
        }
      `}</style>
    </div>
  );
}
