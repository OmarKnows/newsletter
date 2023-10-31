import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
	submit: boolean;
	email: string;
	setSubmit: (submit: boolean) => void;
	setEmail: (email: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppContextProvider');
	}
	return context;
};

interface ProviderProps {
	children: ReactNode;
}

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [submit, setSubmit] = useState(false);
	const [email, setEmail] = useState('');

	return <AppContext.Provider value={{ submit, email, setSubmit, setEmail }}>{children}</AppContext.Provider>;
};
