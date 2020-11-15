import { centered, grid, gridItem, invertByTheme } from "theme/theme";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";
import Image from "components/image";

export default function LanguagesList() {
    const { className, styles } = grid({
        rows: 1,
        cols: 5,
        gap: "5px",
        height: "5em",
        width: "3em",
    });
    const { isDark } = useContext(ThemeContext);
    const { className: centerClass, styles: centerStyle } = centered({
        isColumns: true,
    });
    const { className: inverted, styles: invertedStyle } = invertByTheme(
        isDark
    );
    return (
        <div className={`languages ${centerClass}`}>
            <h5>Uses</h5>
            <div className={className}>
                <Image
                    src="logos/nextjs.png"
                    className={inverted}
                    alt="nextjs"
                    imageSize="1.5em"
                    center
                />
                <Image src="logos/python.svg" center alt="python" type="svg" />
                <Image
                    src="logos/react-logo.png"
                    imageSize="1.5em"
                    alt="react"
                    center
                />
                <Image
                    src="logos/mobx.png"
                    alt="mobx"
                    center
                    imageSize="1.5em"
                />
                <Image
                    src="logos/cljs.png"
                    alt="cljs"
                    center
                    imageSize="1.5em"
                />

                {styles}
                {invertedStyle}
                {centerStyle}
            </div>
        </div>
    );
}
