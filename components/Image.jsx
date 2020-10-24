import React from "react";
function importImage(src) {
  return require(`../public/${src}?trace`);
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
  const image = importImage(src);
  return (
    <div className={className}>
      <img src={image.trace} alt={alt} title={title} />
      <img src={image.src} alt={alt} title={title} />
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
