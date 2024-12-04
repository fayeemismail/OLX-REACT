
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type UserContextType = {
    user: { displayName: string | null };
    setUser: React.Dispatch<React.SetStateAction<{ displayName: string | null }>>;
    logOut: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const storedUser = localStorage.getItem('user');
    const initialUser = storedUser ? JSON.parse(storedUser) : { displayName: null };

    const [user, setUser] = useState<{ displayName: string | null }>(initialUser);

    
    useEffect(() => {
        if (user.displayName !== null) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const logOut = () => {
        setUser({displayName: null})
        localStorage.removeItem('user')
    }

    return (
        <UserContext.Provider value={{ user, setUser, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
