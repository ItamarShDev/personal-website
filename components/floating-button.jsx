import { ThemeContext } from "lib/hooks";
import React, { useState, useContext } from "react";
import Modal from "components/modal";
import MatchCalculator from "components/match-finder/match-calculator";
// @ts-ignore
import Json from "../resume/technologies.json";
/**
 * @param {{ open: any; setOpened: any; }} props
 */
function MatchModal(props) {
    return (
        <Modal
            refreshOnRender
            open={props.open}
            setOpened={props.setOpened}
            title="Are we a match?"
        >
            <MatchCalculator properties={Json} />
        </Modal>
    );
}
function FloatingButton() {
    const [opened, setOpened] = useState(false);
    const { theme } = useContext(ThemeContext);
    const openModal = () => {
        setOpened(!opened);
    };
    return (
        <div className="container" title="Are we a match?">
            <a className="floating-button" onClick={openModal}>
                ?
            </a>
            <MatchModal open={opened} setOpened={setOpened} />{" "}
            <style jsx>
                {`
                    .container {
                        cursor: pointer;
                        position: fixed;
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        font-size: 30px;
                        bottom: 20px;
                        right: 20px;
                        border-radius: 50%;
                        border: 1px solid ${theme.decorations};
                        background-color: ${theme.bg};
                        z-index: 10;
                    }
                    .floating-button {
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                        font-size: 1.5rem;
                        line-height: 3rem;
                        color: ${theme.decorations};
                    }
                    .container:hover .floating-button {
                        color: ${theme.bg};
                    }
                    .container:hover {
                        border-color: ${theme.hoverDecorations};
                        background-color: ${theme.decorations};
                        transition: all 0.2s linear;
                    }
                `}
            </style>
        </div>
    );
}

export default FloatingButton;
