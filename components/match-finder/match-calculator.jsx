import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "lib/hooks";
import PropertiesSelect from "components/match-finder/properties-select";
import MatchProgress from "components/match-finder/match-progress";
import FunnyGif from "components/match-finder/funny-gif";
import Fireworks from "components/match-finder/fireworks";
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
                <FunnyGif percentage={percentage} />
            </section>
            <style jsx>{`
                div {
                    position: relative;
                    height: 100%;
                    //display: grid;
                    //grid-template-rows: 10rem 1fr;
                }
            `}</style>
        </div>
    );
}

export default MatchCalculator;
