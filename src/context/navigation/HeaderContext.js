import React, {useState, createContext, useContext, useEffect} from "react";

const defaultContextData = {
	headerWhite: false,
	setHeaderWhite: () => {}
};

const HeaderContext = createContext(defaultContextData);
const useHeader = () => useContext(HeaderContext);


function HeaderProvider({children}){

	const [state, setState] = useState({headerWhite:false});

	const setHeaderWhite = (toggle) => {
		if(toggle === undefined || toggle === null) {
			return false
		}
		else{
			setState(toggle)
		}
	}

	return(
		<HeaderContext.Provider value={{
			headerWhite: state,
			setHeaderWhite
		}}>
			{children}
		</HeaderContext.Provider>
	)
}

export {HeaderProvider, useHeader, HeaderContext};
