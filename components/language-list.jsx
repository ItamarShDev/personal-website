import { centered, grid, gridItem, invertByTheme } from "theme/theme";
import { ThemeContext } from "lib/hooks";
import { useContext } from "react";
import Image from "components/image";
import React from "react";

export default function LanguagesList() {
    const { className, styles } = grid({
        rows: 1,
        cols: 5,
        gap: "5px",
        height: "5em",
        width: "5em",
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
                    title="Next.js"
                    size="2em"
                />
                <Image
                    src="logos/python.svg"
                    alt="python"
                    title="Python"
                    size="2em"
                />
                <Image
                    src="logos/cljs.png"
                    alt="clojurescript"
                    title="clojure"
                    size="2em"
                />
                <Image
                    src="logos/javascript.svg"
                    alt="javascript"
                    title="javascript"
                    size="2em"
                />
                <Image
                    src="logos/html-5.svg"
                    alt="HTML5"
                    title="HTML5"
                    size="2em"
                />
                <Image
                    src="logos/react-logo.png"
                    size="2em"
                    title="React"
                    alt="react"
                />
                <Image
                    src="logos/jupyter.png"
                    alt="jupyter"
                    title="Jupyter"
                    size="2em"
                />
                <Image
                    src="logos/mobx.png"
                    alt="mobx"
                    title="MobX"
                    size="2em"
                />

                {styles}
                {invertedStyle}
                {centerStyle}
            </div>
        </div>
    );
}
