import React, {useState, createContext} from "react";
// const ThemeContext = createContext(defaultContextData);


const provider = ({children}) => {

	const onHover = (name) => {
		setState({...state, mouse:name})
	}

	const onLeave = () => {
		setState({...state, mouse:""})
	}

	const [state, setState] = useState({
		mouse:"",
		onHover:(name) => {onHover(name)},
		onLeave: () => {onLeave()},
	});

	return (
		<MouseContext.Provider value={{...state}}>
			{children}
		</MouseContext.Provider>
	);
};
export default provider;
export const MouseContext = createContext();

