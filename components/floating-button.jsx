import { ThemeContext, usePortal } from "lib/hooks";
import React, { useState, useContext } from "react";
import Modal from "components/modal";
import MatchCalculator from "components/match-finder/match-calculator";
import Json from "../resume/technologies.json";
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
function FloatingButton(props) {
    const [opened, setOpened] = useState(false);
    const { theme } = useContext(ThemeContext);
    const openModal = () => {
        setOpened(!opened);
    };
    return (
        <div className="container">
            <a className="floating-button" onClick={openModal}>
                +
            </a>
            <MatchModal open={opened} setOpened={setOpened} />{" "}
            <style jsx>
                {`
                    .container {
                        position: fixed;
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        color: white;
                        font-size: 30px;
                        bottom: 20px;
                        right: 20px;
                        border-radius: 50%;
                        border: 1px solid ${theme.decorations};
                    }
                    .floating-button {
                        position: relative;
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        line-height: 43px;
                    }
                    .floating-button:hover {
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
