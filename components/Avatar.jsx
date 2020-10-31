import Image from "@components/image";
import { ThemeContext } from "@lib/hooks";
import { useContext } from "react";

export default function Avatar(props) {
  const { isDark, theme } = useContext(ThemeContext);
  const imageType = isDark ? "dark" : "light";
  return (
    <span className="avatar">
      <Image
        src={`images/me-${imageType}.png`}
        alt="profile picture"
        title="Me, preparing for my wedding"
        size="15em"
      />
      <style jsx>{`
        .avatar {
          display: inline-block;
          height: 15em;
          width: 15em;
          border-radius: 50%;
          border: 1px dashed ${theme.decorations};
          overflow: hidden;
        }
      `}</style>
    </span>
  );
}
