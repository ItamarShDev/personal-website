import PropTypes from "prop-types";
import RankJson from "../../resume/technologies.json";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../lib/hooks";

function calculateMatch(attributes) {
    return Array.from(attributes).reduce((ret, item) => {
        const itemRank = RankJson[item.toLowerCase()];
        if (itemRank !== undefined) {
            return ret + itemRank;
        }
        return ret;
    }, 0);
}

function getQualificationText(percentage) {
    if (percentage === 0) return "";
    if (percentage < 15) {
        return "Possibly under qualified :(";
    }
    if (percentage > 100) {
        return "Seems like we're done here";
    }
    return "We're getting there!";
}

const MatchProgress = ({ selectedSkills, setQualificationText }) => {
    const { theme } = useContext(ThemeContext);
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        const newPercentage = calculateMatch(selectedSkills);
        setQualificationText(getQualificationText(newPercentage));
        const boundedPercentage = Math.min(100, newPercentage);
        setPercentage(boundedPercentage);
    }, [selectedSkills, percentage]);
    return (
        <div className="progress">
            <div className="range">{percentage}% Match</div>
            <style jsx>{`
                .progress {
                    position: relative;
                    height: 2em;
                    width: inherit;
                    border-radius: 0 0 10px 10px;
                    font-size: 0.6em;
                    line-height: 2em;
                    overflow: hidden;
                }

                .range {
                    width: ${percentage}%;
                    height: inherit;
                    color: hsl(0, 0%, ${100 - percentage}%);
                    text-overflow: clip;
                    text-align: center;
                    overflow: hidden;
                    background-color: hsl(${percentage}, 100%, 50%);
                    transition: width 0.2s linear;
                }
                .match-text {
                    font-style: italic;
                    color: ${theme.text};
                }
            `}</style>
        </div>
    );
};

MatchProgress.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string),
};

export default MatchProgress;
