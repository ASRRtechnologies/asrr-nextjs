import {useState, useEffect, useRef} from "react";

const useScreenHeight = () => {
    const [screenSize, setScreenSize] = useState(0);

    let checkScreenSize = () => {
        setScreenSize(window.innerHeight);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return screenSize;
};

export default useScreenHeight;

//Get if screen is resizing and clear vlaue after 3 seconds

export function useScreenResized() {
    const [screenResized, setScreenResized] = useState(false);
    let checkResize = () => {
    	setScreenResized(true);
		window.setTimeout( () => setScreenResized(false), 3000)
	};

    useEffect(() => {
				window.addEventListener('resize', checkResize);
        }, []
    );
	return screenResized
}

const throttleFunction = () => {
    const [value, setValue] = useState(0)
    const throttled = useRef(throttle((newValue) => console.log(newValue), 1000))

    useEffect(() => throttled.current(value), [value])
}
