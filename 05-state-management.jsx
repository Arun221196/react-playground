// 05-state-management.jsx

import React, { createContext, useContext, useState } from 'react';

// Create a Context for the state
const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ children }) => {
    const [state, setState] = useState({ name: 'John Doe', authenticated: false });

    return (
        <StateContext.Provider value={{ state, setState }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to use the StateContext
export const useStateContext = () => {
    return useContext(StateContext);
};

// Example Component using Context
const UserProfile = () => {
    const { state, setState } = useStateContext();

    const login = () => {
        setState({ ...state, authenticated: true });
    };

    return (
        <div>
            <h1>{state.authenticated ? `Welcome, ${state.name}` : 'Please log in'}</h1>
            {!state.authenticated && <button onClick={login}>Log in</button>}
        </div>
    );
};

export default UserProfile;

// When to use Context API:
// - When you have global state that needs to be accessed by many components.
// - Avoid prop drilling when you need to pass props through many layers.
// - When you require to manage state that can change over time for specific parts of your app.