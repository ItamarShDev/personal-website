import { useEffect, useState } from "react";
import PropTypes from "prop-types";

PropertiesSelect.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string),
    theme: PropTypes.object,
    updateSelectedJobs: PropTypes.func,
};

/**
 * @param {Array<string>} skills
 * @param {Array<string>} tags
 * @param {string} text
 */
function filterSkills(skills, tags, text) {
    return Array.from(skills).filter(
        (item) => item.toLowerCase().includes(text) && !tags.includes(item)
    );
}

export default function PropertiesSelect({
    properties,
    setSelectedSkills,
    qualificationText,
    theme,
}) {
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [hovered, setHovered] = useState(0);
    const [inputText, setInputText] = useState("");
    const [tags, setTags] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const skills = Object.keys(properties);
    useEffect(() => {
        setFilteredSkills(filterSkills(skills, tags, inputText));
        const shouldShowResults =
            filteredSkills.length > 0 && inputText.length > 0;
        setShowResults(shouldShowResults);
        setHovered(0);
    }, [inputText, tags]);
    useEffect(() => {
        setSelectedSkills(tags);
    }, [tags]);
    /**
     * @param {any} skill
     */
    const addToResults = (skill) => {
        setShowResults(false);
        setTags([...tags, skill]);
        setInputText("");
    };

    /**
     * @param {{ keyCode: any; }} e
     */
    const moveSelection = (e) => {
        const code = parseInt(e.keyCode);
        if (code === 40) {
            if (!showResults) {
                setShowResults(true);
                return;
            }
            setHovered((hovered + 1) % filteredSkills.length);
        } else if (code === 38) {
            if (!showResults) {
                setShowResults(true);
                return;
            }
            const newItem = hovered === 0 ? filteredSkills.length : hovered;
            setHovered((newItem - 1) % filteredSkills.length);
        } else if (code === 13) {
            const current = filteredSkills[hovered];
            if (current && showResults) addToResults(current);
        } else if (code === 27) {
            setInputText("");
        } else if (code === 8 && inputText === "") {
            removeLastTag();
        }
    };
    const removeLastTag = () => {
        const _tags = [...tags];
        _tags.pop();
        setTags(_tags);
    };

    return (
        <div
            className="matcher"
            tabIndex={0}
            onFocus={() => setShowResults(true)}
            onClick={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
        >
            <div className="title">
                Match by tech
                {qualificationText && (
                    <span className="match-text"> - {qualificationText}</span>
                )}
            </div>
            <div className="container">
                <div className="input-container">
                    {tags.map((tag) => (
                        <div className="tag" key={tag}>
                            {tag}
                        </div>
                    ))}
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={moveSelection}
                        value={inputText}
                    />
                </div>
                <div className="results-container">
                    {showResults && filteredSkills.length > 0 && (
                        <ul className="results">
                            {filteredSkills.map((skill, index) => (
                                <li
                                    key={skill}
                                    className={
                                        index === hovered ? "selected" : ""
                                    }
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseDown={(e) => {
                                        addToResults(skill);
                                        e.stopPropagation();
                                    }}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <style jsx>{`
                .title {
                    color: ${theme.text};
                    font-size: 1em;
                    margin-bottom: 5px;
                }
                input,
                input:focus {
                    outline: none;
                    border: none;
                    line-height: 3em;
                }
                input {
                    background-color: transparent;
                    color: ${theme.text};
                    font-size: 0.7em;
                }

                .matcher,
                .container,
                .input-container {
                    position: relative;
                    width: inherit;
                }

                .input-container {
                    display: flex;
                    border: 1px dashed ${theme.decorations};
                    flex-wrap: wrap;
                    padding: 0.5em;
                }

                .tag {
                    box-shadow: 0 0s 1px 1px ${theme.decorations};
                    font-size: 0.6em;
                    line-height: 2.5em;
                    height: 2.5em;
                    margin: 5px;
                    padding: 0 5px;
                    border-radius: 5px;
                    background-color: ${theme.decorations};
                    color: white;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .results-container {
                    position: relative;
                    width: 100%;
                }
                ul {
                    width: inherit;
                    max-height: 200px;
                    overflow-y: auto;
                    position: absolute;
                    z-index: 1;
                    list-style-type: none;
                    padding: 5px;
                    margin: 0;
                    box-shadow: 0 2px 5px 0 ${theme.decorations};
                    background-color: ${theme.bg};
                    color: ${theme.text};
                    text-transform: capitalize;
                }
                li {
                    cursor: default;
                    padding: 5px;
                    border: 1px dotted ${theme.hoverDecorations};
                }
                li.selected {
                    background-color: ${theme.decorations};
                    color: white;
                }
            `}</style>
        </div>
    );
}
