import { useState, useEffect } from "react";
import { OverflowDetector } from 'react-overflow';


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
