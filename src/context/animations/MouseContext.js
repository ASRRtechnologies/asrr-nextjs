import React, {useState, createContext} from "react";
export const MouseContext = createContext();

const provider = ({children}) => {

	const onHover = (name) => {
		setState(name);
	}

	const onLeave = () => {
		setState("");
	}

	const [state, setState] = useState({
		mouse:"active",
		onHover: onHover,
		onLeave:onLeave
	});

	return (
		<MouseContext.Provider value={{...state}}>
			{children}
		</MouseContext.Provider>
	);
};
export default provider;



