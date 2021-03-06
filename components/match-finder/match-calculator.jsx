import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "lib/hooks";
import PropertiesSelect from "components/match-finder/properties-select";
import MatchProgress from "components/match-finder/match-progress";
import Fireworks from "components/match-finder/fireworks";
import CallMe from "./call-me";
MatchCalculator.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.string),
    properties: PropTypes.object,
};

function MatchCalculator({ properties }) {
    const { theme } = useContext(ThemeContext);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [qualificationText, setQualificationText] = useState("");
    const [percentage, setPercentage] = useState(0);

    return (
        <div>
            <section>
                <PropertiesSelect
                    theme={theme}
                    setSelectedSkills={setSelectedSkills}
                    qualificationText={qualificationText}
                    properties={properties}
                />
                <MatchProgress
                    selectedSkills={selectedSkills}
                    setQualificationText={setQualificationText}
                    percentage={percentage}
                    setPercentage={setPercentage}
                />
            </section>
            <section>
                <Fireworks percentage={percentage} />
                <CallMe percentage={percentage} />
            </section>
            <style jsx>{`
                div {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: grid;
                    gap: 1rem;
                    grid-template-rows: 1fr 2rem;
                }
            `}</style>
        </div>
    );
}

export default MatchCalculator;
