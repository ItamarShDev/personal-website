import { Line } from "react-chartjs-2";
import useChartSettings from "./chart-settings";
import PropTypes from "prop-types";

export const socialData = {
    title: "Progess Over Time",
    labels: ["1 week", "1 month", "4 months", "6 months", "1 year"],
    values: [
        {
            title: "Learning",
            values: [10, 30, 50, 90, 100],
            settings: { fill: false },
        },
        {
            title: "Mingeling",
            values: [50, 50, 80, 90, 90],
            settings: { fill: false },
        },
        {
            title: "Involvement",
            values: [0, 20, 30, 60, 80],
            settings: { fill: false },
        },
    ],
};

/**
 * Shows a Line chart with given data
 */
const SocialAffect = () => {
    const { data, lineOptions } = useChartSettings(socialData);
    if (data) {
        return <Line data={data} options={lineOptions} />;
    }
    return null;
};
SocialAffect.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.arrayOf(PropTypes.object),
};
SocialAffect.defaultProps = {
    labels: [{}],
    values: [],
};
export default SocialAffect;
