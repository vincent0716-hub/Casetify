import React from 'react'
import { LoginProvider } from './loginContext'
import { HomeContextProvider } from './HomePageContext'

interface AllProvidersProps {
    children: React.ReactNode;
}
export const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
    return (
        <LoginProvider>
            <HomeContextProvider>
                {children}
            </HomeContextProvider>
        </LoginProvider>
    )
}
