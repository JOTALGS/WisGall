import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

// Create a context for the user state
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// Component to provide the user context
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        id: null,
        name: null,
        email: null,
        access: null,
        refresh: null,
    });

    useEffect(() => {
        // Initialize user state from localStorage
        const storedAccess = localStorage.getItem('user.access');
        if (storedAccess) {
            setUser({
                isAuthenticated: true,
                id: localStorage.getItem('user.id'),
                name: localStorage.getItem('user.name'),
                email: localStorage.getItem('user.email'),
                access: storedAccess,
                refresh: localStorage.getItem('user.refresh'),
            });
        }
    }, []);

    const setToken = (data) => {
        setUser({
            ...user,
            isAuthenticated: true,
            access: data.access,
            refresh: data.refresh,
        });
        localStorage.setItem('user.access', data.access);
        localStorage.setItem('user.refresh', data.refresh);
    };

    const setUserInfo = (userInfo) => {
        setUser({
            ...user,
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
        });
        localStorage.setItem('user.id', userInfo.id);
        localStorage.setItem('user.username', userInfo.username);
        localStorage.setItem('user.email', userInfo.email);
        console.log('user info set for:', localStorage.getItem('user.username'))
    };

    const removeToken = () => {
        setUser({
            isAuthenticated: false,
            id: null,
            name: null,
            email: null,
            access: null,
            refresh: null,
        });
        localStorage.removeItem('user.access');
        localStorage.removeItem('user.refresh');
        localStorage.removeItem('user.id');
        localStorage.removeItem('user.name');
        localStorage.removeItem('user.email');
    };

    const refreshToken = () => {
        axios.post('/api/refresh/', { refresh: user.refresh })
            .then((response) => {
                setUser({
                    ...user,
                    access: response.data.access,
                });
                localStorage.setItem('user.access', response.data.access);
                axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;
            })
            .catch((error) => {
                console.log(error);
                removeToken();
            });
    };

    return (
        <UserContext.Provider value={{ user, setToken, removeToken, setUserInfo, refreshToken }}>
            {children}
        </UserContext.Provider>
    );
};