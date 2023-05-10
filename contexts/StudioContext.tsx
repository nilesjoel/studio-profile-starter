import React, { useContext, useState, useEffect } from "react";


type StudioLinkData = {
    title: string,
    slug: string,
    uid: string
}
type StudioContextData = {
    menu?: Array<StudioLinkData>
};

type StudioUpdateContextData = {
    toggleTheme: () => void;
};

const StudioContext = React.createContext<StudioContextData | undefined>(undefined);
const StudioUpdateContext = React.createContext<StudioUpdateContextData | undefined>(undefined);


export function useStudioContext() {
    const context = useContext(StudioContext);
    if (!context) {
        throw new Error("useStudioContext must be used within a StudioContextProvider");
    }
    return context;
}

export function useStudioContextUpdate() {
    const context = useContext(StudioUpdateContext);
    if (!context) {
        throw new Error("useStudioContextUpdate must be used within a StudioContextProvider");
    }
    return context;
}

type StudioContextProviderProps = {
    children: React.ReactNode;
    state: StudioContextData;
};

export function StudioContextProvider({ children, state }: StudioContextProviderProps) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    }

    const contextData: StudioContextData & { darkTheme: boolean } = { ...state, darkTheme };
console.log({contextData})

    // fetch a context from Studio Symmetries API
    useEffect(() => {
        const fetchUser = () => {

            // fetch(`https://dashboard.studiosymmetries.com/studio-artist/artist`)
            //     .then((response) => response.json())
            //     .then((data) => {
                 
                 
            //         // console.log(data)
            //     })
            //     .catch((error) => console.log('An error occurred'));
        };

        fetchUser();
    }, []);





    return (
        <StudioContext.Provider value={contextData}>
            <StudioUpdateContext.Provider value={{ toggleTheme }}>
                {children}
            </StudioUpdateContext.Provider>
        </StudioContext.Provider>
    );
}
