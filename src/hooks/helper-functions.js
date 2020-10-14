import { useState, useEffect } from "react";

const useScreenHeight = () => {
	const [screenSize, setScreenSize] = useState(0);

	let checkScreenSize = () => {
		setScreenSize(window.innerWidth);
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return screenSize;
};

export default useScreenHeight;
