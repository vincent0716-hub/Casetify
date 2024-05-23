import React, { createContext, useState, ReactNode } from 'react';

interface HomeContextProps {
    homeClick: string;
    setHomeClick: (v: string) => void;
}
const HomeContext = createContext<HomeContextProps>({ homeClick: "", setHomeClick: () => { } });
interface HomeContextProviderProps {
    children: ReactNode;
}
const HomeContextProvider: React.FC<HomeContextProviderProps> = ({ children }) => {
    // Your context state and logic go here
    const [homeClick, setHomeClick] = useState<string>("");

    return (
        <HomeContext.Provider value={{ homeClick, setHomeClick }}>
            {children}
        </HomeContext.Provider>
    );
};

export { HomeContext, HomeContextProvider };