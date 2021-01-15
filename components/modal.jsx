import { ThemeContext, usePortal } from "lib/hooks";
import { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

function ModalComponent({ open, setOpened, title, children, footer = null }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`container ${open ? "opened" : "closed"}`}>
            <div className={`modal ${open ? "opened" : "closed"}`}>
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
                    animation: 1s focus-out ease-in-out;
                    backdrop-filter: blur(5px) grayscale(1);
                }
                @keyframes focus-out {
                    from {
                        backdrop-filter: blur(0) grayscale(0);
                    }
                    to {
                        backdrop-filter: blur(5px) grayscale(1);
                    }
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
                    background-color: ${theme.modalBg};
                    border: 1px solid ${theme.decorations};
                    border-radius: 1rem;
                    padding: 10px;
                    box-shadow: 0 0 10em -3em ${theme.decorations};
                }
                .modal.opened {
                    top: 50%;
                    left: 50%;
                    animation: open-up 0.5s ease-in;
                    transform: scale(1) translate(-50%, -50%);
                }

                @keyframes open-up {
                    from {
                        top: calc(100% - 20px);
                        left: calc(100% - 20px);
                        transform: translate(-50%, -50%) scale(0);
                        filter: grayscale(1) opacity(0);
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    to {
                        transform: translate(-50%, -50%) scale(1);
                        filter: grayscale(0) opacity(1);
                        border-radius: 0;
                        overflow: auto;
                    }
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
    parentEl = null,
}) {
    // @ts-ignore
    if (!process.browser) return null;
    const [root, setRoot] = useState(null);
    useEffect(() => {
        if (parentEl) {
            setRoot(parentEl);
        } else {
            const elm = document.querySelector("body");
            setRoot(elm);
        }
    }, []);
    if (!root) return null;

    const modal = (
        <ModalComponent
            open={open}
            setOpened={setOpened}
            title={title}
            footer={footer}
        >
            {children}
        </ModalComponent>
    );
    if (refreshOnRender) {
        return open ? usePortal(modal, root) : null;
    }
    return usePortal(modal, root);
}

export default Modal;
