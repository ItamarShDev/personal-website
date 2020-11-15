import Image from "components/image";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";

export default function Avatar(props) {
    const { isDark, theme } = useContext(ThemeContext);
    const imageType = isDark ? "dark" : "light";
    return (
        <span className="avatar">
            <Image
                src={`images/me-${imageType}.jpg`}
                alt="my picture"
                size="inherit"
                circle
                title="Me, preparing for my wedding"
            />
            <style jsx>{`
                .avatar {
                    display: inline-block;
                    height: 15em;
                    width: 15em;
                    margin: 1em;
                    border: 1px dashed ${theme.decorations};
                    overflow: hidden;
                    border-radius: 50%;
                    position: relative;
                }
                @media (max-width: 500px) {
                    .avatar {
                        height: 10em;
                        width: 10em;
                    }
                }
            `}</style>
        </span>
    );
}
