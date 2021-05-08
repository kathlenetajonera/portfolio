import { useEffect, useRef, useState } from "react";
import useResize from "./hooks/useResize";

const Download = () => {
    const { windowWidth } = useResize();
    const [isDesktop, setIsDesktop] = useState(null);
    const downloadLinkRef = useRef();
    const handleClick = () => downloadLinkRef.current.click();

    useEffect(() => {
        if (windowWidth >= 1024) setIsDesktop(true);
        else setIsDesktop(false);
    }, [windowWidth])

    return (
        <>
        { isDesktop &&
            <div className="download">
                <div className="download__icon-btn" onClick={handleClick}>
                    <a ref={downloadLinkRef} href="/portfolio/resume/Kathlene Tajonera CV.pdf" download>
                        <i className="download__icon fas fa-download" />
                    </a>
                </div>

                <button className="button button--download">
                    Download my resume
                </button>
            </div>
        }
        </>
    );
}
 
export default Download;