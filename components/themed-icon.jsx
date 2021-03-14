import { useContext } from "react";
import { ThemeContext } from "lib/hooks";
export function getIconClassAndAction(isDark) {
    if (isDark) {
        return "dark-icon";
    } else {
        return "light-icon";
    }
}
export const ThemedIcon = (props) => {
    const { toggleTheme, isDark, theme } = useContext(ThemeContext);
    const iconClass = getIconClassAndAction(isDark);
    const title = `Toggle ${isDark ? "light" : "dark"} mode`;
    return (
        <a onClick={toggleTheme} className={`icon ${iconClass}`} title={title}>
            <style jsx>{`
                a.icon {
                    height: 60px;
                    width: 60px;
                    font-size: 1.2em;
                    font-style: normal;
                    background-color: ${theme.headerText};
                    mask-size: 20px;
                    mask-position: 1rem center;
                    mask-repeat: no-repeat;
                }
                .dark-icon {
                    mask-image: url(/icons/sun.svg);
                }
                .light-icon {
                    mask-image: url(/icons/moon.svg);
                }
            `}</style>
        </a>
    );
};
