import { useEffect, useState } from "react";

export default function useBodyScroll(scrollValue) {
    const [isScrollingOnBody, setScrollingOnBody] = useState(scrollValue);
    useEffect(() => {
        setScrollingOnBody(scrollValue);
    }, [scrollValue]);
    useEffect(() => {
        if (process.browser) {
            document.body.style.overflow = isScrollingOnBody
                ? "auto"
                : "hidden";
        }
    }, [isScrollingOnBody]);
    return [isScrollingOnBody, setScrollingOnBody];
}
