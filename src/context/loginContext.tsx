import React, { createContext, useState, ReactNode } from 'react';

interface YourContextProps {
    login: string;
    setLogin: React.Dispatch<React.SetStateAction<string>>;
}
const LoginContext = createContext<YourContextProps | undefined>(undefined);
export const useLoginContext = createContext(LoginContext)
interface YourContextProviderProps {
    children: ReactNode;
}
const LoginProvider: React.FC<YourContextProviderProps> = ({ children }) => {
    // Your context state and logic go here
    const [login, setLogin] = useState<string>("");

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };