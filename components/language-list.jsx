import { centered, grid, gridItem, invertByTheme } from "theme/theme";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";
import Image from "components/image";

export default function LanguagesList() {
    const { className, styles } = grid({
        rows: 1,
        cols: 5,
        gap: "0.5rem",
        height: "5rem",
        width: "5rem",
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
            <h4>Uses</h4>
            <div className={className}>
                <Image
                    src="logos/nextjs.png"
                    className={inverted}
                    alt="nextjs"
                    title="Next.js"
                    size="3em"
                />
                <Image
                    src="logos/python.svg"
                    alt="python"
                    title="Python"
                    size="3em"
                />
                <Image
                    src="logos/cljs.png"
                    alt="clojurescript"
                    title="clojure"
                    size="3em"
                />
                <Image
                    src="logos/javascript.svg"
                    alt="javascript"
                    title="javascript"
                    size="3em"
                />
                <Image
                    src="logos/html-5.svg"
                    alt="HTML5"
                    title="HTML5"
                    size="3em"
                />
                <Image
                    src="logos/react-logo.png"
                    size="3em"
                    title="React"
                    alt="react"
                />
                <Image
                    src="logos/jupyter.png"
                    alt="jupyter"
                    title="Jupyter"
                    size="3em"
                />
                <Image
                    src="logos/mobx.png"
                    alt="mobx"
                    title="MobX"
                    size="3em"
                />

                {styles}
                {invertedStyle}
                {centerStyle}
            </div>
        </div>
    );
}
