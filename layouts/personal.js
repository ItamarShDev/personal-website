import { AboutMe, Stats } from "components";
import { centered } from "theme/theme";

const Personal = () => {
    const { className, styles } = centered({
        isColumns: true,
        gap: 20,
    });
    return (
        <div className={className}>
            <AboutMe />
            <Stats />
            {styles}
        </div>
    );
};

export default Personal;
