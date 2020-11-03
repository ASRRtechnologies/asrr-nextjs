import React, {useState, createContext, useContext, useEffect} from "react";

const defaultContextData = {
	headerWhite: false,
};

const HeaderContext = createContext(defaultContextData);
const useTheme = () => useContext(HeaderContext);


function HeaderProvider({children}){

	const [state, setState] = useState({headerWhite:false});

	const toggleHeader = (toggle) => {
		if(toggle === undefined || toggle === null) {
			return false
		}
		else{
			setState(toggle)
		}
	}

	return(
		<HeaderContext.Provider value={{
			headerWhite: setState,
			toggleHeader: toggleHeader
		}}>
			{children}
		</HeaderContext.Provider>
	)
}

export {HeaderProvider};
