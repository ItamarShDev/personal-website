import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "lib/hooks";
import PropertiesSelect from "components/match-finder/properties-select";
import MatchProgress from "components/match-finder/match-progress";
MatchCalculator.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.string),
    properties: PropTypes.arrayOf(PropTypes.string),
};

function MatchCalculator({ properties }) {
    const { theme } = useContext(ThemeContext);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [qualificationText, setQualificationText] = useState("");

    return (
        <div>
            <PropertiesSelect
                theme={theme}
                setSelectedSkills={setSelectedSkills}
                qualificationText={qualificationText}
                properties={properties}
            />
            <MatchProgress
                selectedSkills={selectedSkills}
                setQualificationText={setQualificationText}
            />
        </div>
    );
}

export default MatchCalculator;
