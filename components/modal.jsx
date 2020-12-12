import { ThemeContext } from "lib/hooks";
import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
function ModalComponent({ open, setOpened, title, children, footer = null }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`container ${open ? "opened" : "closed"}`}>
            <div className={`modal `}>
                {title && (
                    <div className="header">
                        <h1 className="title">{title}</h1>
                        <a className="close" onClick={() => setOpened(false)}>
                            ×
                        </a>
                    </div>
                )}
                <div className="body">{children}</div>
                {footer && <div className="footer">{footer}</div>}
            </div>
            <style jsx>{`
                .container.opened {
                    position: fixed;
                    top: 60px;
                    left: 0;
                    height: 100%;
                    height: calc(100% - 60px);
                    width: 100%;
                    display: block;
                    background-color: rgba(0, 0, 0, 0.4);
                }
                .container.closed {
                    display: none;
                }

                .modal {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    max-height: 600px;
                    max-width: 600px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: ${theme.modalBg};
                    border: 1px solid ${theme.decorations};
                    border-radius: 1rem;
                    padding: 10px;
                    box-shadow: 0 0 10em -3em ${theme.decorations};
                }
                .header {
                    padding: 10px;
                    font-size: 1em;
                    border-bottom: 1px solid ${theme.decorations};
                    display: flex;
                    justify-content: space-between;
                }

                .title {
                    line-height: 1rem;
                }

                .body {
                    padding: 15px 10px;
                }
                .header .close {
                    font-size: 1.5rem;
                    padding: 15px;
                    width: 50px;
                    text-align: center;
                    cursor: pointer;
                    color: ${theme.text};
                }
                .close:hover {
                    opacity: 0.8;
                    background-color: rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}

function Modal({
    open,
    setOpened,
    refreshOnRender,
    title,
    children,
    footer = null,
}) {
    // @ts-ignore
    if (!process.browser) return null;
    const [root, setRoot] = useState(null);
    useEffect(() => {
        const elm = document.querySelector("body");
        setRoot(elm);
    }, []);
    if (!root) return null;
    const main = document.querySelector("main");
    if (open) {
        main.style.filter = "blur(10px) grayscale(100%)";
    } else {
        main.style.filter = "";
    }

    if (refreshOnRender) {
        return open
            ? ReactDOM.createPortal(
                  <ModalComponent
                      open={open}
                      setOpened={setOpened}
                      title={title}
                      footer={footer}
                  >
                      {children}
                  </ModalComponent>,
                  root
              )
            : null;
    }
    return ReactDOM.createPortal(
        <ModalComponent
            open={open}
            setOpened={setOpened}
            title={title}
            footer={footer}
        >
            {children}
        </ModalComponent>,
        root
    );
}

export default Modal;
