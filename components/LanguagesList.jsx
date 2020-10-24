import { grid, gridItem, invertByTheme } from "theme/theme";
import { ThemeContext } from "@lib/hooks";
import { useContext } from "react";
import Image from "@components/Image";

export default function LanguagesList() {
  const { className, styles } = grid({
    rows: 3,
    cols: 3,
    gap: 20,
    height: "250px",
    width: "250px",
  });
  const { isDark } = useContext(ThemeContext);
  const { className: item, styles: itemStyle } = gridItem();
  const { className: inverted, styles: invertedStyle } = invertByTheme(isDark);
  return (
    <div className="languages">
      <h5>Uses</h5>
      <div className={`${className}`}>
        <Image
          src="logos/nextjs.png"
          className={`${item} ${inverted}`}
          alt="nextjs"
          center
        />
        <Image
          src="logos/python.svg"
          className={item}
          center
          alt="python"
          type="svg"
        />
        <Image src="logos/react-logo.png" className={item} alt="react" center />
        <Image src="logos/mobx.png" className={item} alt="mobx" />
        <Image src="logos/cljs.png" className={item} alt="cljs" />
        <Image
          src="logos/vscode.svg"
          className={item}
          alt="vscode"
          type="svg"
        />
        {itemStyle}
        {styles}
        {invertedStyle}
      </div>
    </div>
  );
}
